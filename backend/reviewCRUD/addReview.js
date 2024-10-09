// Функция добавления отзыва и оценки на книгу
// bookID - ID книги
// review_text - текст отзыва
// grade - оценка
// ------------------------------------------

import {firebase} from '../config/config';
import { Alert } from 'react-native';

export async function addReview(bookID, review_text, grade){
    const user = firebase.auth().currentUser;

    var d = new Date();

    now = ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." + d.getFullYear();
    const review  = {
        bookID: bookID,
        userID: user.uid,
        review: review_text,
        grade: grade,
        date: now,
    };

    await firebase.firestore().collection('reviews').add(review)
    .then(() => {
        Alert.alert('Сообщение',`Отзыв отправлен`)
    }).catch((error) => {
        alert(error.message);
    })
}