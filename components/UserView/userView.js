import { View } from "react-native"
import { ImageProfile, UserProfileCard, ViewImage, ViewInfo } from "./style"
import { CardSubTitle, CardTitle } from "../styles"
import { Levels } from "../../backend/gamification/levels";
import { Text } from "react-native";
import { ProgressBar } from "react-native-paper";

export const UserView = ({id,level,points,firstName,lastName,email,image_url}) =>{
    level_point = Levels(level);
    user_bar = 1 / level_point * points;

    return(
        <UserProfileCard>
                <ViewImage>
                    <ImageProfile source={{uri: image_url }}/>
                </ViewImage>
                <ViewInfo>
                    <CardTitle>{lastName} {firstName}</CardTitle>
                    <CardSubTitle>{email}</CardSubTitle>
                    <View style={{width:"55%",marginTop:30}}>
                    <Text style={{marginBottom:10}}>Уровень {level}</Text>
                    {/* Шкала уровня */}
                    <ProgressBar style={{height:10}} progress={user_bar} color="#840780"/>
                    </View>
                </ViewInfo>
            </UserProfileCard>

    )
}