// Функция проверки статуса книги
// bookID - ID книги
// return true - книга доступна
// return false - книга не доступна
// --------------------------------

import { useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function checkBook(bookID){

    const [request, setRequest] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('requests').where("bookID", "==", bookID).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {status} = doc.data();
                    objs.push(status);
                });
        setRequest(objs);
    });
    },[])

    for (var value of request)
    {
        if (value == "Approved"){
            return false
        }else {
            return true;
        }
    }

}