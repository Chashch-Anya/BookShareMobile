// Функция совершения действия "Принятие заявки"
// requestID - ID запроса
// reader - ID читателя
// user - ID владельца
//---------------------------------------------
import { addMsg } from "../../msgCRUD/addMsg";
import { updateRequest } from "../../requestCRUD/updateRequest"

export async function acceptedRequest(requestID,reader,user){
    updateRequest(requestID, "Accepted");

    user = {
        _id:user,
    }
    text= "Запрос одобрен!"
    const Msg = {_id: "1", SenderID: user, recieverID:reader,createdAt: new Date(),text:text,user:user
    };

    addMsg(Msg,requestID);
}
