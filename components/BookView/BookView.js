import { View , Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CategoryArea, CategoryText, CategoryView ,BookCard, BookGrade, CardAddInfo, CardContentContainer, CardImage, CardMainContent, CardSubTitle, CardTitle, Readers, TitleContent } from "./style";
import { useNavigation } from "@react-navigation/native";
import { readImageBook } from "../../backend/img/readImage";
import {addSelectBook} from "../../backend/selectCRUD/addSelectBook"
import { deleteSelectBook } from "../../backend/selectCRUD/deleteSelectBoook";
import { readSelect } from "../../backend/selectCRUD/readSelect";
import { checkSelect } from "../../backend/check/checkSelect";
import { readOneBook } from "../../backend/bookCRUD/readOneBook";
import { Button } from "react-native";
import { ButtonDone, ButtonText } from "../styles";
import { closeRequest } from "../../backend/gamification/actions/closedRequest";


const BookView = ({id,requestID,reader,user}) => {
    book_info = readOneBook(id);
    bookName= book_info.bookName
    author = book_info.author
    category = book_info.category

    img_url = readImageBook(book_info.image);
    selecte_list = readSelect();
    return(
        <BookCard>
            <View>
                <CardImage source={{uri: img_url}}/>
            </View>
            
            <CardContentContainer>
                <CardMainContent>    
                    <TitleContent>
                    <CardTitle>{bookName}</CardTitle> 
                    </TitleContent>
                    <CardSubTitle>{author}</CardSubTitle>
                </CardMainContent>  

                <CategoryArea>{CategoryList(category,all_category)}</CategoryArea>
                
                <CardAddInfo>
                    <ButtonDone onPress={() => closeRequest(requestID,reader,user)} >
                        <ButtonText>Книга возвращена</ButtonText>
                    </ButtonDone>
                   {/* <Button ti /> */}
                </CardAddInfo>  
            </CardContentContainer>
        </BookCard>
)};

export default BookView;

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
        <CategoryView>
        <CategoryText>{name}</CategoryText>
        </CategoryView>
    )
}

