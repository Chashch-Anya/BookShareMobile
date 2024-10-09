// Функция чтения запросов
// bookID - id книги
// Статусы запросов
// Sent - запрос отправлен
// Accepted - Запрос принят
// Rejected - Запрос отклонен
// Completed - Запрос выполнен, т.е. книга прочитана и возвращена владельцу
// ------------------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config";

export function readRequestsBook(bookID){

    const [requests, setRequests]= useState(''); 
    useEffect(() => {
        firebase.firestore().collection('requests').where("bookID", "==", bookID).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID, fromID,toID,status} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    bookID,
                    fromID,
                    toID,
                    status,
            });
            });
            setRequests(objs);
        });
    },[]);


    return requests;
}