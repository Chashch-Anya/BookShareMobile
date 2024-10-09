// Функция добавления сообщения
// Mymsg - сообщение
// requestID - ID заявки и чата
// -------------------------------------------
import { useEffect, useState } from "react";
import {firebase} from '../config/config';

export function addMsg(Mymsg,requestID){
    firebase.firestore().collection("chats").doc(requestID).collection("messages").add({
        ...Mymsg, 
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    })
}