// Функция загрузки обложки книги
// image - идентификатор изображения
// -----------------------------------------

import {firebase} from '../config/config';

export async function uploadImage(image,setUploading){

    setUploading(true);
    const response = await fetch(image.uri)
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try{
        await ref;
    }catch(e){
        console.log(e);
    }
    setUploading(false);
}