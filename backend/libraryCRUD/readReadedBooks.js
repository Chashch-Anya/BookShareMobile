// Функция получения списка прочитанных пользователем книг
// return books
// -------------------------------------------------------

import { useState , useEffect} from "react";
import {firebase} from "../config/config"
import { readBooks } from "../bookCRUD/ReadBooks";
import { readOutRequests } from "../requestCRUD/readOutRequest";

export function readReadedBooks(){
    books = [];

    book_list = readBooks();
    requests = readOutRequests();

    for (var request of requests){
        if (request.status == "Completed"){
            for (var book of book_list){
                if (book.id == request.bookID){
                    books.push(book);
                }
            }
        }
    }

    return books;
}