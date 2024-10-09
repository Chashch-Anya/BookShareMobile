// Функция проверки владельца книги
// bookID - ID книги
// return true - пользватель является владельцем
// return false - пользватель не является владельцем
// -------------------------------------------

import {firebase} from '../config/config';
import { useEffect, useState } from 'react';

export function checkOwner(bookID){
    const user = firebase.auth().currentUser.uid;
    
    const [book, setBook] = useState('');
    useEffect(() => {
        firebase.firestore().collection('books').doc(bookID).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setBook(snapshot.data())
            }
            else{
                console.log('Book does not exist');  
            }
        })
    },[])

    if (book.owner == user){
        return true
    }else {
        return false;
    }
}