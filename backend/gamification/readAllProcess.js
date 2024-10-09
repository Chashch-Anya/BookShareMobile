// Функция чтения всех пользовательских игровых процессов
// ----------------------------------

import React,{ useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function readAllProcess(){

    const [books, setBooks] = useState([]);
    useEffect(() => {
        firebase.firestore().collection('process').onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {points, level, user} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    points,
                    level,
                    user
                });
            });
            setBooks(objs);
        });
    },[])

    return books;
}