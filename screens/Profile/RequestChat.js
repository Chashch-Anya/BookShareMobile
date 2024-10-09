import { View } from "react-native";
import { readOneRequest } from "../../backend/requestCRUD/readOneRequest";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { checkOwner } from "../../backend/check/checkOwner";
import { readImageUser } from "../../backend/img/readImage";
import { readOneUser } from "../../backend/userCRUD/readOneUser";
import { firebase } from "../../backend/config/config";
import { readAllMsg } from "../../backend/msgCRUD/readAllMsg";
import BookItem from "../../components/BookItem/BookItem";
import { readOneBook } from "../../backend/bookCRUD/readOneBook";
import BookView from "../../components/BookView/BookView";
import { HorizontalLine } from "../../components/Line/НorizontalLine";
export const RequestChat= ({route})=>{
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"",
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
    const {requestID, bookID,owner,reader} = route.params;
    // request_info = readOneRequest(requestID);

    var user_id;
    var toID;
    
    if (checkOwner(bookID)){
        user_id=owner;
        toID =reader;
    }else{
        user_id=reader;
        toID =owner;
    }
    
    user_info =  readOneUser(user_id)
    // item = readOneBook(bookID)
    image_url = readImageUser(user_info.image);

    const [messages,setMessages]=useState([]);

    const readAllMsg = async ()=>{
        const q = await firebase.firestore().collection('chats').doc(requestID)
        .collection('messages')
        .orderBy('createdAt','desc')
        .get();

        const allMsg = q.docs.map(doc => {
            return{
                ...doc.data(),
                createdAt:doc.data().createdAt && doc.data().createdAt.toDate(),
            }
        })
        setMessages(allMsg)
    }
    useEffect(() => {
       readAllMsg()
      }, [])
          
    const onSend = messageArray => {
        const msg = messageArray[0];
        const Mymsg = {...msg, SenderID: user_id, recieverID:toID,createdAt: new Date()
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, Mymsg));
        firebase.firestore().collection("chats").doc(requestID).collection("messages").add({
            ...Mymsg, 
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        })
      };

      return (
        <View style={{flex:1, marginBottom:10, backgroundColor: 'white'}}>
            <View>
                <BookView id={bookID}
                        requestID={requestID}
                        reader={reader}
                        user={owner}
                />
                <HorizontalLine/>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id:user_id,
                    name: user_info.lastName + " " + user_info.firstName,
                    avatar:image_url,
                }}

                renderBubble={props => {
                    return (
                        <Bubble {...props}
                                wrapperStyle={{
                                    right:{
                                        backgroundColor:'#840780',
                                    },
                                }
                        }/>
                    )
                }}
            />
        </View> 
      );
}