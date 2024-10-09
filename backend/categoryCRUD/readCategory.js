// Функция получения списка категорий
// return categories
// ----------------------------------

import React,{ useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function readCategories(){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        firebase.firestore().collection('category').onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {name} = doc.data();
                console.log(doc.id);
                objs.push({
                    id:doc.id,
                    doc,
                    name
                });
            });
            setCategories(objs);
        });
    },[])

    return categories;

}
