// Функция удаления изображения из хранилища
// filename - имя файла для удаления
// -------------------------------

import {firebase} from '../config/config';

export async function deleteImage(filename){
    
    await firebase.storage().ref().child(filename)
        .delete()
        .then(() => {
  })
  .catch((e) => console.log(`deleteImage=> Error on image ${filename} deletion => `, e));
}
