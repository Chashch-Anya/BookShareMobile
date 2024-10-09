// Функция получения средней оценки книги
// bookID -ID книги
// return grade - ср.оценка
// ----------------------------------

import React, {useEffect,useState} from 'react';
import {firebase} from './config/config';

export function avarageGrade(bookID) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('reviews')
            .where("bookID", "==", bookID).onSnapshot((query) =>{
                const objs = [];
                query.forEach((doc) => {
                    const {grade} = doc.data();
                    objs.push(grade);
                });
                setReviews(objs);
            });
    }, [])

    var n = 0;
    var summ = 0;
    for (var value of reviews)
    {
        summ+=value;
        n+=1;
    }
    if (summ!=0){
        grade = Math.round(summ/n*10)/10;
        return grade;
    }
    
    else return 0;
}