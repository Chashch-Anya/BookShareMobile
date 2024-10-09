// Функция получения списка добавленных пользователем книг
// return books
// -------------------------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config"

export function readLibrary(){
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        firebase.firestore().collection("books")
        .where("owner", "==", firebase.auth().currentUser.uid).get()
        .then((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookName, bookDescr, author, image, grade, readers} = doc.data();
                objs.push({
                    id:doc.id,
                    doc,
                    bookName,
                    author,
                    bookDescr,
                    image,
                    grade,
                    readers
                });
            });
            setBooks(objs);
        });
    },[])

    return books;
}