// Функция получения обложки книги
// image - идентификатор изображения в бд
// return imageUrl - адрес изображения
// -----------------------------------------

import {firebase} from '../config/config';
import React, {useEffect, useState} from "react";

export function readImageUser(image) {

    const [imageUrl, setImageUrl] = useState(undefined);

    useEffect(() => {
        let url;
        if (image == null || image == undefined) {
            url = "https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png";
        } else {
            url = 'https://firebasestorage.googleapis.com/v0/b/booksharingapp-3c773.appspot.com/o/' + image + '?alt=media&token=309837a9-a694-485c-bcd4-910509d57549';
        }
        setImageUrl(url)
    })
    return imageUrl;
}

export function readImageBook(image) {

    const [imageUrl, setImageUrl] = useState(undefined);
    useEffect(() => {
        let url;
        if (image == null || image == undefined) {
            url = "https://junior3d.ru/texture/Бумага/ОбложкиСтарыхКниг/обложки-старых-книг_135.jpg";
        } else {
            url = 'https://firebasestorage.googleapis.com/v0/b/booksharingapp-3c773.appspot.com/o/' + image + '?alt=media&token=309837a9-a694-485c-bcd4-910509d57549';
        }
        setImageUrl(url)
    })
    return imageUrl;
}