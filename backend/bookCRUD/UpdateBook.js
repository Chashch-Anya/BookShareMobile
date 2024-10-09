// Функция обновления информации о книге
// id - id книги
// bookName - название книги
// bookDescr - описание книги
// author - автор книги
// image - изображение
// category - категория
// -------------------------------

import {firebase} from '../config/config';
import { deleteImage } from '../img/deleteImage';
import { uploadImage } from '../img/uploadImage';

export async function updateBook(id,bookName, bookDescr, author,image, uploading, category,old_image){
    const owner = firebase.auth().currentUser;

    var filename = null;
    if (image!=null && image != undefined && image != "") 
    {
        uploadImage(image,uploading);
        filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    }

    const book  = {
        bookName: bookName,
        bookDescr: bookDescr,
        author: author,
        belingsTo: owner.uid,
        image:filename,
        category:category
    };

    await firebase.firestore().collection('books').doc(id).update(book)
    .then(() => {
        alert(`Книга "${bookName}" успешно обновлена`)
    }).catch((error) => {
        alert(error.message);
    })

    if (old_image!=null && old_image != undefined) 
    {
        deleteImage(old_image);
    }
}