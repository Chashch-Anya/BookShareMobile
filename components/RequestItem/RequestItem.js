import { View , Text, TouchableOpacity, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonCircleBrand,ButtonCircle,TitleContent,CardContentContainer, CardMainContent, CardTitle, Request, RequestImage, RequestInfo, RequestTitle } from "./style";
import { readOneUser } from "../../backend/userCRUD/readOneUser";
import { readOneBook } from "../../backend/bookCRUD/readOneBook";
import { updateRequest } from "../../backend/requestCRUD/updateRequest";
import { checkCurrentUser } from "../../backend/check/checkUser";
import { readImageUser } from "../../backend/img/readImage";
import { acceptedRequest } from "../../backend/gamification/actions/acceptedRequest";

const RequestItem = ({requestID,bookID,toID,fromID,status}) => {
    const navigation = useNavigation();
    book = readOneBook(bookID);
    user = null;
    text = null;

    if (checkCurrentUser(toID)){
        user = readOneUser(fromID);
        text = "От";
    }
    else{
        user = readOneUser(toID);
        text = "Кому";
    }
    
    let img_url = readImageUser(user.image);

    function Btns(status){
        if (checkCurrentUser(toID) && status=="Sent"){
        return(
            <>
            <ButtonCircle onPress={() => updateRequest(requestID, "Rejected")}>
                <Text style={{textAlign:"center"}}>Отклонить</Text>
            </ButtonCircle>
            <ButtonCircleBrand onPress={() => acceptedRequest(requestID,fromID,toID)}>
                <Text style={{textAlign:"center", color:'white'}}>Принять</Text>
            </ButtonCircleBrand>
            </>
        )}
        else{
            
        }
    }

    function GetChat(){
        if (status == "Accepted" ){
            navigation.navigate('RequestChat',{requestID:requestID,bookID:bookID,owner:toID,reader:fromID})
        }
    }

    return(
        <Request id={requestID} onPress={GetChat}
                >
            <RequestInfo>
             <View style={{paddingVertical:20, paddingHorizontal:5}}>
            <RequestImage source={{uri: img_url}}/>
            </View>
             <CardContentContainer>
                 <CardMainContent>
                    <View style={{width:"95%"}}>
                        <Text>{text}: {user.lastName} {user.firstName}</Text>
                        <Text>Книга: {book.bookName}</Text>
                        <Text>22.04.2023</Text>
                    </View>
                </CardMainContent>
            </CardContentContainer>
            </RequestInfo>
            <View style={{justifyContent:"space-between", flexDirection:'row',width:'100%'}}>
                {Btns(status)}
            </View>
        </Request>
       
)};

export default RequestItem;


