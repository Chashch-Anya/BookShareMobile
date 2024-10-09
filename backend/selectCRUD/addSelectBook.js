// Функция добавления книги в избраннное
//  bookID - ID книги
//  ------------------------------------

import {firebase} from '../config/config';
import { Alert } from 'react-native';

export async function addSelectBook(bookID){

    const user = firebase.auth().currentUser;
    const select  = {
        bookID: bookID,
        userID: user.uid,
    };
    
    await firebase.firestore().collection('selected').add(select)
    .then(() => {
        Alert.alert('Сообщение',`Книга добавлена в закладки`)
    }).catch((error) => {
        console.log(error.message);
    })
}