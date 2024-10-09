// Функция получения входящих запросов на книгу
// return requests
// Статусы запросов
// Sent - запрос отправлен
// Accepted - Запрос принят
// Rejected - Запрос отклонен
// Completed - Запрос выполнен, т.е. книга прочитана и возвращена владельцу
// ------------------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config";

export  function readRequests(){
    const userID = firebase.auth().currentUser.uid;

    const [requests, setRequests]= useState(''); 
    useEffect(() => {
        firebase.firestore().collection('requests').where("toID", "==", userID).
        onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID, fromID,status, toID} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    bookID,
                    fromID,
                    status,
                    toID
            });
            });
            setRequests(objs);
        });
    },[]);


    return requests;
}