// Функция получения списка отзывов и оценок на книгу
// bookID - ID книги
// return reviews - массив отзывов
// ----------------------------------

import React,{ useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function readReviews(bookID){
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('reviews')
        .where("bookID", "==", bookID).get()
        .then((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID, userID, review, grade, date} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    bookID, userID, review, grade, date
                });
            });
            setReviews(objs);
        });
    },[])
    return reviews;

}