// Функция совершения действия "Закрытие заявки"
// requestID - ID запроса
// reader - ID читателя
// user - ID владельца
//---------------------------------------------
import { addMsg } from "../../msgCRUD/addMsg";
import { updateRequest } from "../../requestCRUD/updateRequest"

export async function closeRequest(requestID,reader,user){
    updateRequest(requestID, "Completed");

    user = {
        _id:user,
    }

    console.log(user)
    text= "Книга возрвращена. Запрос закрыт."
    const Msg = {_id: "1", SenderID: user, recieverID:reader,createdAt: new Date(),text:text,user:user
    };

    addMsg(Msg,requestID);
}
