// Функция добавления новой книги
// bookName - название книги
// bookDescr - описание книги
// author - автор книги
// image - изображение
// category - категория
// -------------------------------

import {firebase} from '../config/config';
import { addPoints } from '../gamification/addPoints';
import { uploadImage } from '../img/uploadImage';
import { Alert } from 'react-native';

export async function addNewBook(bookName, bookDescr, author, image, uploading, category,user_process){
    
    uploadImage(image,uploading)
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);

    const owner = firebase.auth().currentUser;
    const book  = {
        bookName: bookName,
        bookDescr: bookDescr,
        author: author,
        owner: owner.uid,
        image:filename,
        category:category,
        grade:0,
        readers:0
    };
    
    await firebase.firestore().collection('books').add(book)
    .then(() => {
        Alert.alert('Сообщение',`Книга "${bookName}" успешно добавлена`)
    }).catch((error) => {
        alert(error.message);
    })

    addPoints("AddBook",user_process);
}