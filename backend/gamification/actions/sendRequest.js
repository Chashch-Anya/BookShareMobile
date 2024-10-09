// Функция совершения действия "Отправка заявки"
// bookID - ID книги
// ownerID - ID владельца
//---------------------------------------------

import { addMsg } from "../../msgCRUD/addMsg";
import { sendRequest } from "../../requestCRUD/addRequest";
import { readOneRequest } from "../../requestCRUD/readOneRequest";
import { readOutRequests } from "../../requestCRUD/readOutRequest";

export async function sendRequestAndMsg(bookID, ownerID){
    sendRequest(bookID,ownerID);
    
    // user_request  = readOutRequests();
    // request = null;
    // for (var value of user_request){
    //     if (value.bookID == bookID && value.toID == ownerID){
    //         request = value;
    //     }
    // }    

    // user = {
    //     _id:request.fromID,
    // }
    // const Msg = {_id: "1", SenderID: request.fromID, recieverID:request.toID,createdAt: new Date(),text:"тест",user:user
    // };
    // addMsg(Msg);
}
