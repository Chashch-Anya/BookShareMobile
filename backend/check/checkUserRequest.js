// Функция проверки статуса заявки тек. пользователя
// bookID - ID книги
// return 
// --------------------------------

import { useEffect, useState } from 'react';
import {firebase} from '../config/config';

export function checkUserRequest(bookID,owner){
    const user = firebase.auth().currentUser.uid;
    const [request, setRequest] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('requests').where("bookID", "==", bookID).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {status, fromID} = doc.data();
                    objs.push({status, fromID});
                });
        setRequest(objs);
    });
    },[])
    
    if (user == owner) return "Owner";

    for (var value of request)
    {
        cur_status = value.status;
        from = value.fromID;

        if (cur_status == "Approved"){
            if (from == user) return "Holder";
            else return "Block";
        }
        if (cur_status == "Sent" && from == user) return "Sent"
    }
    return 'Free';

}