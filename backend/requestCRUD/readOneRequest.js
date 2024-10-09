// Функция 
// ---------------------------------------

import {firebase} from '../config/config';
import { useEffect, useState } from 'react';

export function readOneRequest(ID){
    const [book, setBook] = useState('');
    
    useEffect(() => {
        firebase.firestore().collection('requests')
        .doc(ID).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setBook(snapshot.data())
            }
            else{
                console.log('заявка не найдена');  
            }
        })
    },[])

    return book;
}
