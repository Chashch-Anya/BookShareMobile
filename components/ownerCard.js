import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { readOneUser } from "../backend/userCRUD/readOneUser";
import { CardSubTitle, CardTitle } from "./styles";
import { readImageUser } from "../backend/img/readImage";



function OwnerCardSection({book_owner}){
    
        const navigation = useNavigation();
        let img_url = readImageUser(book_owner.image);

        return(
              <>
            <View>
                    <OwnerCard>
                        <ViewImage>
                            <OwnerImage source={{ uri:img_url }} />
                        </ViewImage>
                        <OwnerInfo>
                            <CardTitle>{book_owner.firstName} {book_owner.lastName}</CardTitle>
                            <CardSubTitle>{book_owner.email}</CardSubTitle>
                        </OwnerInfo>
                    </OwnerCard>
                </View>
            </>
        
        )
}

export default OwnerCardSection;

const OwnerCard = styled.View`
justify-content: space-between;
flex-direction:row; 
align-items:center;
`;

const OwnerImage = styled.Image`
    padding:5px;
    margin: 10px;
    width:70px;
    height: 70px;
`;
const ViewImage = styled.View`
`;

const OwnerInfo = styled.View`
    width:100%;
    padding: 10px;
`;
