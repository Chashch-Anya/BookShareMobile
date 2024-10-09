// Функция чтения списка избранных книг
// return select_books - список избранного
// ---------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config"

export function readSelect(){
    const user = firebase.auth().currentUser;
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('selected').where("userID", "==", user.uid).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID} = doc.data();
                objs.push(
                    {
                        id:doc.id,  
                        doc,      
                        bookID
                    }
                );
            });
            setSelected(objs);
        });
    },[])
    
return selected;
}