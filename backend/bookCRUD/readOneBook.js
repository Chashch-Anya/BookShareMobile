// Функция чтения информации об одной книге
//  bookID - ID выбранной книги
// ---------------------------------------

import {firebase} from '../config/config';
import { useEffect, useState } from 'react';

export function readOneBook(bookID){
    const [book, setBook] = useState('');
    
    useEffect(() => {
        firebase.firestore().collection('books')
        .doc(bookID).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setBook(snapshot.data())
            }
            else{
                console.log('Книга не найдена');  
            }
        })
    },[])

    return book;
}
