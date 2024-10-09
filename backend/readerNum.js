// Функция определения количество прочтения книги
// bookID - ID книги
// return readers - количество прочтений
// ------------------------------------------------

import { readRequestsBook } from "./requestCRUD/readRequestsBook";

export  function readersNum(bookID){

    requests = readRequestsBook(bookID);

    readers = 0;

    for (var value of requests){
        if (value.status == "Completed"){
            readers+=1;
        }
    }

   
    return readers;
}