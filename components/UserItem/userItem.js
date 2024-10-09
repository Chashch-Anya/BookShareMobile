import { View } from "react-native";
import { readOneUser } from "../../backend/userCRUD/readOneUser"
import { CardImageView, PlaceNum, PlaceNumView, UserCard, UserCardImage, UserCardInfo } from "./style";
import { readImageUser } from "../../backend/img/readImage";
import { Text } from "react-native";

const UserItem = ({user_id,level,points,place}) =>{
    user = readOneUser(user_id);
    let img_url = readImageUser(user.image);

    return (
        <View>
            <UserCard>
                <CardImageView>
                    <PlaceNumView><PlaceNum>{place}</PlaceNum></PlaceNumView>
                    <UserCardImage source={{uri:img_url}}/>
                </CardImageView>
                <UserCardInfo>
                    <Text>{user.lastName} {user.firstName}</Text>
                    <Text>{user.email}</Text>
                    <Text>Уровень: {level}</Text>
                    <Text>{points}</Text>
                </UserCardInfo>
            </UserCard>
        </View>
    )

}

export default UserItem;