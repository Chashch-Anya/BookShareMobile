// Функция проверки наличия книги в закладках
// bookID - ID книги
// return true - книга в закладках
// return false - книга не в закладках
// --------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config";


export function checkSelect(bookID){

    const user = firebase.auth().currentUser;
    const [booksID, setBooksID] = useState([]);

   useEffect(() => {
         firebase.firestore().collection('selected').where("userID", "==", user.uid).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID} = doc.data();
                objs.push(bookID);
            });
            setBooksID(objs);
        });
    },[])


    for (var id of booksID)
    {
        if (id == bookID)
        {
            return true;
        }
    }
    return false;
}