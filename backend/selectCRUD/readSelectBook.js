// Функция чтения списка избранных книг
// return select_books - список избранного
// ---------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config"
import { readBooks } from "../bookCRUD/ReadBooks";

export function readSelectBooks(){
    const user = firebase.auth().currentUser;
    const [booksID, setBooksID] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('selected').where("userID", "==", user.uid).onSnapshot((query) =>{
            const objs = [];
            query.forEach((doc) => {
                const {bookID} = doc.data();
                objs.push(
                    bookID
                );
            });
            setBooksID(objs);
        });
    },[])

    var books = readBooks();

    let select_book = []
    for (var value of books) {
        for (v of booksID)
            if (value.id == v)
            {                
                select_book.push({id:value.id, bookName: value.bookName, author: value.author, bookDescr:value.bookDescr, image: value.image, grade: value.grade, readers: value.readers});
            }
        }
    
return select_book;
}