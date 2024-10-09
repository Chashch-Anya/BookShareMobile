// Функция получения исходящих запросов на книгу
// return requests
// Статусы запросов
// Sent - запрос отправлен
// Accepted - Запрос принят
// Rejected - Запрос отклонен
// Completed - Запрос выполнен, т.е. книга прочитана и возвращена владельцу
// ------------------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config";

export  function readOutRequests(){
    const userID = firebase.auth().currentUser.uid;

    const [requests, setRequests]= useState(''); 
    useEffect(() => {
        firebase.firestore().collection('requests').where("fromID", "==", userID).get()
        .then((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID, toID, fromID,status} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    bookID,
                    toID,
                    fromID,
                    status
            });
            });
            setRequests(objs);
        });
    },[]);


    return requests;
}