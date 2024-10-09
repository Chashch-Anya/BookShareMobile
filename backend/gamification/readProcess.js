// Функция чтения пользовательского игрового процеса
// return result - процесс
// ----------------------------------

import React,{ useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function readUserProcess(userID){

    const [books, setBooks] = useState([]);
    userID = firebase.auth().currentUser.uid;

    useEffect(() => {
        firebase.firestore().collection('process').where("user", "==", userID).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {points, level} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    points,
                    level
                });
            });
            setBooks(objs);
        });
    },[])
    var result;

    for(var value of books) result={id: value.id, level: value.level, points: value.points};

    return result;

}