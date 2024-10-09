// Функция добавления/отправки запроса на книгу
// bookID - id книги
// ownerID - id владельца (кому отправляется запрос)
// Статусы запросов
// Sent - запрос отправлен
// Accepted - Запрос принят
// Rejected - Запрос отклонен
// Completed - Запрос выполнен, т.е. книга прочитана и возвращена владельцу
// ------------------------------------------------

import { Alert } from 'react-native';
import {firebase} from '../config/config';

export async function sendRequest(bookID, ownerID){

    const user = firebase.auth().currentUser;
    var now = new Date().toString();

    const request  = {
        bookID: bookID,
        fromID: user.uid,
        toID: ownerID,
        status: "Sent", 
        date: now,
    };
    
    await firebase.firestore().collection('requests').add(request)
    .then(() => {
        Alert.alert('Сообщение','Запрос на книгу успешно отправлен')
    }).catch((error) => {
        alert(error.message);
    })



}