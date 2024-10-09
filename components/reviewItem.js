import { Text, View } from "react-native";
import { readOneReview } from "../backend/reviewCRUD/readOneReview";
import { readOneUser } from "../backend/userCRUD/readOneUser";
import styled from "styled-components";
import { SmallStarsGrade } from "./Stars/StarsGrade";


const ReviewItem = ({reviewID,userID}) => {

    rev_item = readOneReview(reviewID);
    user = readOneUser(userID)
    
    return(
        <ReviewCard>
                <View style={{justifyContent:"flex-start", flexDirection:"row"}}>
                   <Text style={{fontWeight:"500", marginEnd:10}}>{user.firstName}</Text>
                    {SmallStarsGrade(rev_item.grade)}
                </View>
                <Text style={{marginBottom:20, marginTop:20}}>{rev_item.review}</Text>
                <Text style={{color:'gray'}}>{rev_item.date}</Text>
        </ReviewCard>       
)};

const ReviewCard = styled.View`
    /* margin:15px; */
    background-color:white;
    padding:10px;
`;


export default ReviewItem;

