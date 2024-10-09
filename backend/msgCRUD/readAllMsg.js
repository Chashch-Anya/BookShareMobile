// Функция чтения всех сообщений в чате
//  requestID - ID заявки и чата
//  return messages - сообщения
// ----------------------------------------
import { useEffect, useState } from "react";
import {firebase} from '../config/config';

export function readAllMsg (requestID){

    const [messages,setMessages]=useState([]);

    const readAllMsg = async ()=>{
        const q = await firebase.firestore().collection('chats').doc(requestID)
        .collection('messages')
        .orderBy('createdAt','desc')
        .get();

        const allMsg = q.docs.map(doc => {
            return{
                ...doc.data(),
                createdAt:doc.data().createdAt,
            }
        })
        setMessages(allMsg)
    }
    useEffect(() => {
       readAllMsg()
      }, [])

      return messages;
}