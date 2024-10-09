import { addPoints } from "../addPoints";

export async function readBook(bookID,user_process){


    // добавить прочтение

    addPoints("ReadBook",user_process);
}