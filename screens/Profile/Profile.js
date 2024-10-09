import {firebase} from '../../backend/config/config';
import { changePasswordCurrentUser } from "../../backend/auth/ResetPassword";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View } from "react-native"
import { readAllProcess } from "../../backend/gamification/readAllProcess";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import { readOneUser } from "../../backend/userCRUD/readOneUser";
import { readImageUser } from "../../backend/img/readImage";
import { UserView } from "../../components/UserView/userView";
import styled from "styled-components";
import { BigButton, BigButtonText, ButtonListText, ListButton } from "../../components/styles";

const Profile = () => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Профиль",
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
    userID = firebase.auth().currentUser.uid;
    user_pr = readAllProcess();

    user_info = readOneUser(userID);
    image_url = readImageUser(user_info.image);

    var current_user;
    for (var value of user_pr) {if (value.user == userID) current_user = value}

    return(<View>
        <SafeAreaView>
            <FlatList
                data={user_pr}
                renderItem={({item}) =>{
                    if (item.user == userID){
                    return(
                        <UserView
                            id={userID}
                            level={item.level}
                            points={item.points}
                            firstName={user_info.firstName}
                            lastName={user_info.lastName}
                            email={user_info.email}
                            image_url={image_url}
                        />
                     )}
                 }} 
             />
                 <BtnView>
                 <BigButton onPress={() => navigation.navigate('AddBook')}>
                     <BigButtonText>Добавить книгу</BigButtonText>
                 </BigButton>  
             <ListButton onPress={() => navigation.navigate('Library')}>
                 <ButtonListText>Библиотека</ButtonListText>
             </ListButton>    
             <ListButton onPress={() => navigation.navigate('MsgList')}>
                 <ButtonListText>Запросы</ButtonListText>
             </ListButton>   
             <ListButton onPress={() => navigation.navigate('About',{userID:userID, email: user_info.email, lastName: user_info.lastName, firstName: user_info.firstName, image: user_info.image,image_url:image_url})}>
                 <ButtonListText>Управление аккаунтом</ButtonListText>
             </ListButton>   
             <ListButton>
                 <ButtonListText>Настройки</ButtonListText>
             </ListButton>   
             <ListButton onPress={() => changePasswordCurrentUser()}>
                 <ButtonListText>Сменить пароль</ButtonListText>
             </ListButton>   
             <ListButton onPress={() => {firebase.auth().signOut()}}>
                 <ButtonListText>Выход</ButtonListText>
             </ListButton>      
             </BtnView>
        </SafeAreaView>

    </View>)
}
export default Profile;

const BtnView = styled.View`
    margin-top: 20px;
    padding-left:10%;
    padding-right:10%
`;