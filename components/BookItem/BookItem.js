import { View , Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CategoryArea, CategoryText, CategoryView ,BookCard, BookGrade, CardAddInfo, CardContentContainer, CardImage, CardMainContent, CardSubTitle, CardTitle, Readers, TitleContent } from "./style";
import { useNavigation } from "@react-navigation/native";
import { readImageBook } from "../../backend/img/readImage";
import {addSelectBook} from "../../backend/selectCRUD/addSelectBook"
import { deleteSelectBook } from "../../backend/selectCRUD/deleteSelectBoook";
import { readSelect } from "../../backend/selectCRUD/readSelect";
import { checkSelect } from "../../backend/check/checkSelect";

// import {deleteSelectBook} from "../backend/selectCRUD/deleteSelectBook"

const BookItem = ({id,bookName, author, image,owner, category,all_category,grade,readers}) => {
    const navigation = useNavigation();

    img_url = readImageBook(image);
    selecte_list = readSelect();
    return(
        <BookCard   id={id}
                    onPress={() => navigation.navigate("BookDescription", {bookID: id, ownerID:owner,all_category:all_category})}>
            <View>
                <CardImage source={{uri: img_url}}/>
            </View>
            
            <CardContentContainer>
                <CardMainContent>    
                    <TitleContent>
                    <CardTitle>{bookName}</CardTitle> 
                    {Bookmark(id,selecte_list)}        
                    </TitleContent>
                    <CardSubTitle>{author}</CardSubTitle>
                </CardMainContent>  

                <CategoryArea>{CategoryList(category,all_category)}</CategoryArea>
                
                <CardAddInfo>
                    <BookGrade>
                        <Icon name="grin-stars" size={20} style={{padding:5}}/>  
                        <Text>{grade}</Text> 
                    </BookGrade>
                    
                    <Readers>
                        <Icon name="book" size={20} style={{padding:5}}/>
                        <Text>{readers}</Text>
                        {/* <Text>{img_url}</Text> */}
                    </Readers>
                </CardAddInfo>  
            </CardContentContainer>
        </BookCard>
)};

export default BookItem;


function Bookmark(bookID,selecte_list){

    var select = checkSelect(bookID);
    if (!select){
    return(
    <TouchableOpacity onPress={() => addSelectBook(bookID)}>
        <Icon name="bookmark" size={20}/>
    </TouchableOpacity>
    )
    }
    else
    {
        return(
        <TouchableOpacity onPress={() => deleteSelectBook(bookID,selecte_list)}>
            <Icon name="bookmark" size={20} solid/>
        </TouchableOpacity>
        )
    }
}

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

