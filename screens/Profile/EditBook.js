import {Text, TouchableOpacity,Image, View, Button } from "react-native"
import React,{ useEffect, useLayoutEffect, useState } from "react";
import { deleteBook } from "../../backend/bookCRUD/DeleteBook";
import { updateBook } from "../../backend/bookCRUD/UpdateBook";
import { BaseTextArea, BaseTextInput, ButtonDone, ButtonText, FormArea, InnerContainer, InputLabel, StyledContainer, StyledScrollView} from "../../components/styles";
import { readImageBook } from "../../backend/img/readImage";
import styled from "styled-components";
import * as ImagePicker from 'expo-image-picker';
import { MultiSelect } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { readCategories } from "../../backend/categoryCRUD/readCategory";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export const EditBook =({route}) => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Редактировать книгу",
            headerTitleStyle:{
                fontSize:20,
                fontWeight: "bold",
                color: "white",
            },
            headerStyle:{
                backgroundColor: "#840780",
                height: 120,
            },
            headerTitleAlign: 'center',
        })
    },[])

    const {bookID,bookName,bookDescr,author,image,category} = route.params;

    const [e_bookName, setBookName] = useState(bookName);
    const [e_bookDescr, setBookDescr] = useState(bookDescr);
    const [e_author, setAuthor] = useState(author);
    const [e_category, setCategory] = useState(category);

    image_url = readImageBook(image);
    const [e_image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error,setError]= useState('');

    categories_list = readCategories();

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

    function ImageConst(){        
        if (e_image == null )
        {
        return(
            <ViewImage>
                <ImageBook source={{uri: image_url}} />
            </ViewImage>
        )
        }
        else {
            return(
                <ViewImage>
                    {e_image &&  <ImageBook source={{uri: e_image.uri}} />}
                </ViewImage>
            )
        }
    }


    const isValidForm = () => {
        if(e_bookName == '' || e_author == '' || e_category=='') 
        {return updateError("Необходимо заполнить все обязательные поля", setError)}
        return true;
    }

    const sumbitForm = () => {
        if(isValidForm()){
            updateBook(bookID,e_bookName,e_bookDescr,e_author,e_image,setUploading,e_category,image);
        }
    }

    return(
        <><StyledContainer>
            <InnerContainer>
                <StyledScrollView>
                    <FormArea style={{ width: '100%' }}>
                        <View>
                            {error ? <Text style={{ color: 'red', padding: 5, }}>{error}</Text> : null}
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            {ImageConst(e_image)}
                            <TouchableOpacity onPress={pickImage} style={{ width: '40%' }}>
                                <Text>Изменить изображение</Text>
                            </TouchableOpacity>
                        </View>

                        <InputLabel>Название книги *</InputLabel>
                        <BaseTextInput
                            placeholder="Введите название книги..."
                            onChangeText={(name) => setBookName(name)}
                            autoCorrect={false}
                            value={e_bookName} />

                        <InputLabel>Автор *</InputLabel>
                        <BaseTextInput placeholder="Введите автора книги..."
                            onChangeText={(author) => setAuthor(author)}
                            autoCorrect={false}
                            value={e_author} />

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
                            value={e_category}
                            search
                            searchPlaceholder="Поиск..."
                            onChange={item => { setCategory(item); } }
                            renderItem={renderDataItem}
                            renderSelectedItem={(item, unSelect) => (
                                <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                                    <View style={styles.selectedStyle}>
                                        <Text style={styles.textSelectedStyle}>{item.name}</Text>
                                        <AntDesign color="black" name="delete" size={10} />
                                    </View>
                                </TouchableOpacity>
                            )} />

                        <InputLabel>Описание</InputLabel>
                        <BaseTextArea placeholder="Введите описание книги..."
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(descr) => setBookDescr(descr)}
                            value={e_bookDescr}
                            autoCorrect={false} />
                    </FormArea>
                </StyledScrollView>
            </InnerContainer>
            </StyledContainer><View style={{ height: 90 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        width: 60,
                        backgroundColor: '#840780',
                        marginLeft: 10,
                        marginVertical: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={() => deleteBook(bookID)}>
                        <Icon name="trash-alt" size={20} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={sumbitForm}
                        style={{
                            flex: 1,
                            backgroundColor: '#840780',
                            marginHorizontal: 10,
                            marginVertical: 10,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <ButtonText>Сохранить</ButtonText>
                </TouchableOpacity>
            </View>
        </View>
    </>
    )
}

const ImageBook = styled.Image`
    padding:5px;
    margin-bottom: 10px;
    width:150px;
    height: 200px;
`;


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

const ViewImage = styled.View`
`;

const renderDataItem = (item) => {
    return (
        <View style={styles.item}>
            <Text style={styles.selectedTextStyle}>{item.name}</Text>
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
    );
};

const updateError = (error, stateUpdater) => {
    console.log("error" + error)
    stateUpdater(error);
    setTimeout(() => { stateUpdater('')}, 5000);
}