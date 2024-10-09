import { Button, FlatList, SafeAreaView, Text, View,TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { readReviews } from "../../backend/reviewCRUD/readReviews";
import ReviewItem from "../../components/reviewItem";
import { avarageGrade } from "../../backend/averageGrade";
import { reviewsNum } from "../../backend/reviewNum";
import styled from "styled-components";
import { StarsGrade } from "../../components/Stars/StarsGrade";
import { HorizontalLine } from "../../components/Line/НorizontalLine";
import { ButtonText } from "../../components/styles";

const ReviewList = ({route}) =>{
    const {bookID,bookName} = route.params;

    reviews = readReviews(bookID);
    const navigation = useNavigation();
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:bookName,
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
    av_grade = avarageGrade(bookID);
    return(
        <View>
            <SafeAreaView style={{height:"100%"}}>
                <MainLabel>Отзывы</MainLabel>
                <View style={{justifyContent:"space-between", flexDirection:"row", margin:15}}>
                    {StarsGrade(av_grade)}
                </View>
                {/* +++сортировка */}
                {ReviewNull(bookID)}
                <FlatList 
                    data={reviews} 
                    renderItem={({item}) =>{
                        if (item.review !="" && item.review!=null){
                        return(
                            <View style={{marginHorizontal:15,marginTop:5}}>
                                <ReviewItem
                                reviewID={item.id}
                                userID={item.userID} />
                                <HorizontalLine /></View>
                            )
                    }}}
                />
            <View style={{height:90}}>
                <View style={{ flex: 1}}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("BookReview",{bookID: bookID, av_grade: av_grade, bookName:bookName})}
                    style={{
                        flex: 1,
                        backgroundColor: '#840780',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <ButtonText>Оценить книгу</ButtonText>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>

        </View>
    )
}

function ReviewNull(bookID){
    reviews_amount = reviewsNum(bookID);

    if (reviews_amount == 0){
    return(
        <View>
            <TextNull>Отзывов пока нет</TextNull>
            <SubText>Вы можете оставить отзыв первыми</SubText>
        </View>
    )
}
}

const TextNull = styled.Text`
    color: gray;
    text-align: center;
    padding: 30px 30px 10px 30px ;
    font-size: 25px;
`;

const SubText = styled.Text`
    color: gray;
    text-align: center;
    font-size: 15px;
    padding-bottom: 20px;
`;

const MainLabel = styled.Text`
    font-size: 25px;
    margin-left: 20px;
    margin-top: 10px;
    font-weight: 500;
`


export default ReviewList;