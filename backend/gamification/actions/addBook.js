import { addNewBook } from "../../bookCRUD/AddBook";
import { addPoints } from "../addPoints";

export async function addBook(bookName, bookDescr, author, image, uploading, category,user_process){
    
    addNewBook(bookName, bookDescr, author, image, uploading, category);
    
    addPoints("AddBook",user_process);
}