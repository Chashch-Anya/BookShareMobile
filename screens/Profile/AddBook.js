import React, { useLayoutEffect, useState } from "react";
import {  View , Text, ScrollView, TouchableOpacity, Image, StyleSheet} from "react-native";
import { BaseTextInput, StyledScrollView,ButtonDone, ButtonText, FormArea, InnerContainer, InputLabel, StyledContainer, SubTitle, BaseTextArea } from "../../components/styles";

import * as ImagePicker from 'expo-image-picker';
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { readCategories } from "../../backend/categoryCRUD/readCategory";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { readUserProcess } from "../../backend/gamification/readProcess";
import { addBook } from "../../backend/gamification/actions/addBook";

const AddBook = ({navigation}) =>{

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Добавить книгу",
            headerTitleStyle:{
                fontSize:20,
                fontWeight: "bold",
                color: "white",
            },
            headerStyle:{
                backgroundColor: "#840780",
                height: 80,
            },
            headerTitleAlign: 'center',
        })
    },[])
    user_process = readUserProcess();

    const [bookName, setBookName] = useState('');
    const [bookDescr, setBookDescr] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState([]);
    categories_list = readCategories();

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error,setError]= useState('');

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: [3,4],
            quality:1,
        });

        if (!result.canceled) {
            const source = {uri: result.assets[0].uri};
            setImage(source);
          }
    }

    const isValidForm = () => {
        if(bookName == '' || author == '' || category=='') return updateError("Необходимо заполнить все обязательные поля", setError)
        return true;
    }

    const sumbitForm = () => {
        if(isValidForm()){
            addBook(bookName, bookDescr,author,image,setUploading,category,user_process)
        }
    }

    return(
        <StyledContainer>
            <InnerContainer>
                <SubTitle>Добавление новой книги</SubTitle>
                <StyledScrollView>
                <FormArea style={{width:'100%'}}>
                    <View>
                        {error ? <Text style={{color: 'red', padding: 5,}}>{error}</Text> : null}
                    </View>
                    <InputLabel>Название книги *</InputLabel>
                    <BaseTextInput 
                        placeholder="Введите название книги..."
                        onChangeText={(bookName)=> setBookName(bookName)}
                        autoCorrect={false}/>
                    
                    <InputLabel>Автор *</InputLabel>
                    <BaseTextInput 
                        placeholder="Введите автора книги..."
                        onChangeText={(author)=> setAuthor(author)}
                        autoCorrect={false}/>    

                    <InputLabel>Категория *</InputLabel>
                    <MultiSelect
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={categories_list}
                            labelField="name"
                            valueField="id"
                            placeholder="Выберите подходящие категории"
                            value={category}
                            search
                            searchPlaceholder="Поиск..."
                            onChange={item => {setCategory(item);}}
                            renderItem={renderDataItem}
                            renderSelectedItem={(item, unSelect) => (
                                <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                                    <View style={styles.selectedStyle}>
                                        <Text style={styles.textSelectedStyle}>{item.name}</Text>
                                        <AntDesign color="black" name="delete" size={10} />
                                    </View>
                                </TouchableOpacity>
                                )}
                    />

                    <InputLabel>Описание </InputLabel> 
                    
                    <BaseTextArea
                        placeholder="Введите описание книги..."
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={(bookDescr)=> setBookDescr(bookDescr)}
                        autoCorrect={false}
                        style={{textAlignVertical: 'top'}}
                     />

                    <TouchableOpacity onPress={pickImage}>
                        <InputLabel>Выберите изображение ...</InputLabel>
                        <IconOrPic image={image}/>
                    </TouchableOpacity>
                    <View>
                        {image && <Image source={{uri: image.uri}} style={{width:300, height:300}}/>}
                    </View>
                  
                </FormArea>
                </StyledScrollView>
                 <ButtonDone onPress={sumbitForm}>

                         <ButtonText>Сохранить</ButtonText>
                    </ButtonDone>
            </InnerContainer>
        </StyledContainer>
    )
}

export default AddBook;

const renderDataItem = (item) => {
    return (
        <View style={styles.item}>
            <Text style={styles.selectedTextStyle}>{item.name}</Text>
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
    );
};

const IconOrPic = ({image}) =>{
    if (image == null)
    {
        return(
            <Icon name="image" size={300} style={{textAlign:'center', marginTop:-30, paddingTop:0}} color={'gray'}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#37d5d2a2',
        paddingTop: 30,
        flex:1
    },
    dropdown: {
        height: 50,
        backgroundColor: '#efefef',
        borderRadius: 5,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        marginBottom: 10,

        // shadowOpacity: 0.2,
        // shadowRadius: 1.41,

        // elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 15,
        borderRadius: 5,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 10,
    },
});


const updateError = (error, stateUpdater) => {
    console.log("error" + error)
    stateUpdater(error);
    setTimeout(() => { stateUpdater('')}, 5000);
}