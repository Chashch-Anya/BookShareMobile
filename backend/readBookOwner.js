import { useEffect, useState } from "react";
import { firebase } from "./config/config";
import { readOneUser } from "./userCRUD/readOneUser";

export function readOwner(bookID){
    console.log(bookID)
    const [owner, setOwner] = useState('');
    const [book, setBook] = useState('');
    
    useEffect(() => {
        firebase.firestore().collection('books')
        .doc(bookID).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setBook(snapshot.data())
            }
            else{
                console.log('Книга не найдена');  
            }
            // setOwner(book.owner);
        })
    },[])
    
    console.log(book.owner)
    user = readOneUser(owner)
    return user;

}
