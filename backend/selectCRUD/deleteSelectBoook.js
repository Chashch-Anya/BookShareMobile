// Функция удаления книги из избранного
// bookID - ID книги
// ----------------------------
import { useEffect, useState } from 'react';
import {firebase} from '../config/config';

export async function deleteSelectBook(bookID,list){
    select_id = null;
    for (var value of list){
        if (value.bookID == bookID ){
            select_id = value.id;
        }
    }

    await firebase.firestore().collection('selected').doc(select_id).delete()
    .then(() => {
            console.log(`Книга удалена из закладок`);
        }).catch((error) => {
        console.log(error.message);
    })
}