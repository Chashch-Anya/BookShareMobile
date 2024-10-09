import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import React,{ useLayoutEffect } from "react";
import { sendRequest } from "../../backend/requestCRUD/addRequest";
import { readImageUser } from "../../backend/img/readImage";
import { ButtonText, CardImage, CardSubTitle, CardTitle } from "../../components/styles";
import { readOneBook } from "../../backend/bookCRUD/readOneBook";
import { addSelectBook } from "../../backend/selectCRUD/addSelectBook";
import { deleteSelectBook } from "../../backend/selectCRUD/deleteSelectBoook";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { checkSelect } from "../../backend/check/checkSelect";
import { checkUserRequest } from "../../backend/check/checkUserRequest";
import BookInfoPaperSection from "../../components/bookInfoSection";
import BookInfoNumsSection from "../../components/bookNumsSection";
import { readOneUser } from "../../backend/userCRUD/readOneUser";
import styled from "styled-components";
import { CategoryText, CategoryView } from "../../components/BookItem/style";
import { deleteRequest } from "../../backend/requestCRUD/deleteRequest";
import { readOutRequests } from "../../backend/requestCRUD/readOutRequest";
import { readSelect } from "../../backend/selectCRUD/readSelect";
import { sendRequestAndMsg } from "../../backend/gamification/actions/sendRequest";

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
    border-radius: 145px;
`;
const ViewImage = styled.View`
`;

const OwnerInfo = styled.View`
    width:100%;
    padding: 10px;
`;

const BookDescription = ({route}) => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Описание книги",
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

    const {bookID, ownerID, all_category} = route.params;
    book_info = readOneBook(bookID);
    selected_list = readSelect();
    book_owner = readOneUser(ownerID);
    img_url = readImageUser(book_owner.image)


    user_request  = readOutRequests();
    request_id = null;
    for (var value of user_request){
        if (value.bookID == bookID && value.toID == ownerID){
            request_id = value.id;
        }
    }

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex:4}}>
                <BookInfoPaperSection 
                            bookID={bookID}
                            book_info={book_info}
                />
                
                <BookInfoNumsSection
                            bookID={bookID}
                            bookName={book_info.bookName}
                />


                <CategoryArea>{CategoryList(book_info.category,all_category)}</CategoryArea>

                {ownerCard(book_owner)}
             
            </View>

            <View style={{flex:2}}>
                 {renderBookDescription(book_info.bookDescr)} 
            </View>


            <View style={{height:90}}>
                 {renderBottomButton(bookID,selected_list)}
            </View>

        </View>

    // <View>
    //     <Text>{book.author}</Text>
    //     <Button title="Прочитано" onPress={() => updateRequest(bookID, "completed")}/>

    )
}

function ownerCard(book_owner){
    
    let img_url;    

    img_url =  readImageUser(book_owner.image);
    return(
            <View>
             <OwnerCard>
                 <ViewImage>
                     <OwnerImage source={{uri:img_url}}/>
                 </ViewImage>
                 <OwnerInfo>
                     <CardTitle>{book_owner.firstName} {book_owner.lastName}</CardTitle>
                     <CardSubTitle>{book_owner.email}</CardSubTitle>
                 </OwnerInfo>
             </OwnerCard>    
         </View>
    )
}

function renderBookDescription(bookDescr) {
    if (bookDescr == "") bookDescr="Описание отсутствует";

    return (
        <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
            <ScrollView>
            <Text style={{color:'black', fontSize: 20, fontWeight: "500", marginVertical:10}}>Описание книги</Text>
                <Text>{bookDescr}</Text>
            </ScrollView>
        </View>
    )
}

function renderBottomButton(bookID,selected_list) {
    return (
        <View style={{ flex: 1, flexDirection: 'row'}}>
           {Bookmark(bookID,selected_list)}

           {SendBtn(bookID,book_info.owner,request_id)}
        </View>
    )
}

function Bookmark(id,selected_list){
    
    if (!checkSelect(id)){
    return(
    <TouchableOpacity style={{
        width: 60,
        backgroundColor: '#840780',
        marginLeft: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'}}
        onPress={() => addSelectBook(id)}>
        <Icon name="bookmark" size={20} color={'white'}/>
    </TouchableOpacity>
    )
    }
    else
    {
        return(
        <TouchableOpacity style={{
            width: 60,
            backgroundColor: '#840780',
            marginLeft: 10,
            marginVertical: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center' }} 
            onPress={() => deleteSelectBook(id,selected_list)}>
            <Icon name="bookmark" size={20} solid color={'white'}/>
        </TouchableOpacity>
        )
    }
}

function SendBtn(id,owner,request_id){
    statusBookFromUser = checkUserRequest(id, owner)
    const navigation = useNavigation();

    switch (statusBookFromUser){
        case "Owner":
            return(
                    <TouchableOpacity
                            onPress={() =>navigation.navigate("EditBook", 
                            {bookID: id, 
                            bookName: book_info.bookName, 
                            bookDescr: book_info.bookDescr, 
                            author: book_info.author,
                            image: book_info.image,
                            category:book_info.category
                        })}

                            style={{
                                flex: 1,
                                backgroundColor: '#840780',
                                marginHorizontal: 10,
                                marginVertical: 10,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                        <ButtonText>Редактировать</ButtonText>
                    </TouchableOpacity>
            );

        case "Holder":
            return(
                    <TouchableOpacity
                            style={{
                                flex: 1,
                                backgroundColor: 'gray',
                                marginHorizontal: 10,
                                marginVertical: 10,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                        <ButtonText>Книга у вас на руках</ButtonText>
                    </TouchableOpacity>
            );
        
        case "Free":
            return(
                <TouchableOpacity
                onPress={() => sendRequestAndMsg(id, owner)}
                style={{
                    flex: 1,
                    backgroundColor: '#840780',
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ButtonText>Отправить запрос</ButtonText>
            </TouchableOpacity>
            )

        case "Sent": 
        return(
            <TouchableOpacity
            onPress={()=> deleteRequest(request_id)}
            style={{
                flex: 1,
                backgroundColor: 'fff',
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ButtonText>Отменить запрос</ButtonText>
        </TouchableOpacity>
        )

        case "Block":
            return(
                <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'gray',
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'gray'
                }}
            >
                <Text>Книга недоступна</Text>
            </TouchableOpacity>
            )
    }
    
}


export const CategoryArea = styled.View`
    flex-direction:row; 
    align-items:center;
    margin-top: 10px;
    `

function CategoryList(category,all_category){
    if(category!=undefined){
        let categories_book = [];    
        for (var value of category){
            for (var item of all_category){
                if(value == item.id){
                    categories_book.push(<Category name={item.name}/>)
                }
            }
        }
    return categories_book;
}
}

const Category = ({name}) =>{
    return(
        <CategoryView style={{paddingHorizontal: 5}}>
        <CategoryText>{name}</CategoryText>
        </CategoryView>
    )
}

export default BookDescription;