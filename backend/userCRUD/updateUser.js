// Функция обновления информации о пользователе
// id - id пользователя
// firstName - Имя
// ladsName - Фамилия
// email - адрес электронной почты
// image - изображение
// -------------------------------

import {firebase} from '../config/config';
import { deleteImage } from '../img/deleteImage';
import { uploadImage } from '../img/uploadImage';

export async function updateUser(email,lastName, firstName, image,setUploading,old_image){ 
    const id = firebase.auth().currentUser.uid;
    
    var filename = null;
    if (image!=null && image != undefined && image != "") 
    {
        uploadImage(image,uploading);
        filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    }

    const user  = {
        email:email,
        lastName: lastName,
        firstName: firstName,
        image: filename,
    };

    await firebase.firestore().collection('users').doc(id).update(user)
    .then(() => {
        alert(`Информация  успешно обновлена`)
    }).catch((error) => {
        alert("updateUser =>"+error.message);
    })

    if (old_image!=null && old_image != undefined) 
    {
        deleteImage(old_image);
    }
}