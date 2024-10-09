// Функция получения информации о текущем пользователе
// return user - пользователь
// --------------------------------------------------

import { useEffect, useState } from "react";
import {firebase} from "../config/config"

export function readOneUser(id){
    const [user, setUser] = useState('');

    useEffect(() => {
        firebase.firestore().collection('users')
        .doc(id).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setUser(snapshot.data())
                console.log('readOneUser => Пользователь найден');  
            }
            else{
                console.log('readOneUser => Пользователь не найден');  
            }
        })
    },[])

    return user;
}