// Функция получения списка всех книг
// return books - массив книг
// ----------------------------------

import React,{ useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function readBooks(){
    const [books, setBooks] = useState([]);
    useEffect(() => {
        firebase.firestore().collection('books').onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookName, bookDescr, author, image,owner, category,grade,readers} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    bookName,
                    author,
                    bookDescr,
                    image,
                    owner,
                    category,
                    grade,
                    readers
                });
            });
            setBooks(objs);
        });
    },[])

    return books;

}