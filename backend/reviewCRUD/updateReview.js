// Функция обновления отзыва
// id - id отзыва
// review - текст отзыва
// grade - оценка
// -------------------------------

import {firebase} from '../config/config';

export async function updateBook(id, review_text, grade){

    const review  = {
        bookID: bookID,
        review: review_text,
        grade: grade,
        date: now,
    };

    await firebase.firestore().collection('reviews').doc(id).update(review)
    .then(() => {
        alert(`Отзыв на "${bookName}" обновлен`)
    }).catch((error) => {
        alert(error.message);
    })

}