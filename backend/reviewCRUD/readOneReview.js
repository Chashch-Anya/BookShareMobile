// Функция чтения одного отзыва
// reviewID - ID отзыва
// return review - отзыв
// ---------------------------

import {firebase} from '../config/config';
import { useEffect, useState } from 'react';

export function readOneReview(reviewID){
    const [review, setReview] = useState('');
    useEffect(() => {
        firebase.firestore().collection('reviews').doc(reviewID).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setReview(snapshot.data())
            }
            else{
                console.log('review does not exist');  
            }
        })
    },[])
    return review;
}