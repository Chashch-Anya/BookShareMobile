// Функция обновления средней оценки книги
// id - id книги
// grade - оценка
// -------------------------------------

import {firebase} from './config/config';

export async function updateAverageGrade(id,grade){

    const book  = {
        grade:grade,
    };

    await firebase.firestore().collection('books').doc(id).update(book)
    .then(() => {
        console.log(``)
    }).catch((error) => {
        console.log(error.message);
    })
}