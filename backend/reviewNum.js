// Функция определения количества отзывов
// bookID - ID книги
// return num - количество отзывов(текстовых)
// ------------------------------------------------

import { readReviews } from "./reviewCRUD/readReviews";


export  function reviewsNum(bookID){

    reviews = readReviews(bookID);

    num = 0;

    for (var value of reviews){
        if (value.review != "" && value.review != null){
            num+=1;
        }
    }
   
    return num;
}