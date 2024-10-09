import { Text, TouchableOpacity, View } from "react-native"
import { BaseTextInput, ButtonDone, ButtonText, FormArea, InnerContainer, InputLabel, StyledContainer, StyledScrollView } from "../../components/styles";
import styled from "styled-components";
import { readOneUser } from "../../backend/userCRUD/readOneUser";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { updateUser } from "../../backend/userCRUD/updateUser";
import { Image } from "react-native";
import { readImage } from "../../backend/img/readImage";

const About = ({route}) => {

    const {userID,email,lastName,firstName,image,image_url} = route.params;

    const [e_email,setEmail] = useState(email);
    const [e_lastName, setLastName] = useState(lastName);
    const [e_firstName, setFirstName] = useState(firstName);

    const [e_image, setImage] = useState(image_url);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: [3,3],
            quality:1,
        });

        if (!result.canceled) {
            const source = {uri: result.assets[0].uri};
            setImage(source);
          }
    }

    function ImageConst(){        
        if (e_image == image_url )
        {
        return(
            <ViewImage>
                <ImageProfile source={{uri: image_url}} />
            </ViewImage>
        )
        }
        else {
            return(
                <ViewImage>
                    {e_image &&  <ImageProfile source={{uri: e_image.uri}} />}
                </ViewImage>
            )
        }
    }

    return (
        <StyledContainer>
            <InnerContainer>
                <StyledScrollView>
                    <FormArea style={{width:'100%'}}>
                        <View style={{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                       {ImageConst(e_image)}
                        <TouchableOpacity onPress={pickImage} style={{width:'40%'}}>
                            <Text>Изменить изображение</Text>
                        </TouchableOpacity>
                        </View>
                    <InputLabel>Email</InputLabel>
                    <BaseTextInput 
                        placeholder="Введите email..."
                        onChangeText={(email)=> setEmail(email)}
                        value={e_email}
                        autoCapitalize="none"
                        autoCorrect={false}/>
                    
                    <InputLabel>Фамилия</InputLabel>
                    <BaseTextInput 
                        placeholder="Введите фамилию..."
                        onChangeText={(lastName)=> setLastName(lastName)}
                        autoCapitalize="none"
                        value={e_lastName}
                        autoCorrect={false}/>
                        
                    <InputLabel>Имя</InputLabel>
                    <BaseTextInput 
                        placeholder="Введите имя..."
                        onChangeText={(firstName)=> setFirstName(firstName)}
                        autoCapitalize="none"
                        value={e_firstName}
                        autoCorrect={false}/>

                    </FormArea>
                </StyledScrollView>

                <ButtonDone onPress={() => updateUser(email, e_lastName,e_firstName,e_image,setUploading,image)}>
                         <ButtonText>Сохранить</ButtonText>
                </ButtonDone>
            </InnerContainer>
        </StyledContainer>
    )
}

export default About;

const ViewImage = styled.View`
`;

const ImageProfile = styled.Image`
    padding:5px;
    margin: 10px;
    width:130px;
    height: 130px;
    border-radius: 145px;
`;
