//  Функция изменения статуса запроса/заявки
//  id - id запроса
//  status - статус для изменения:
//  Sent - запрос отправлен
//  Accepted - Запрос принят
//  Rejected - Запрос отклонен
//  Completed - Запрос выполнен, т.е. книга прочитана и возвращена владельцу
//  ----------------------------------------
import {firebase} from '../config/config';
import { useNavigation } from "@react-navigation/native";

export async function updateRequest(id,status){
    const request  = {
        status: status,
    };

    await firebase.firestore().collection('requests').doc(id).update(request)
    .then(() => {
        if (status == "Completed"){
            const navigation = useNavigation();
            navigation.navigate("BookReview")
        }
        console.log(status)
    }).catch((error) => {
        alert(error.message);
    })
}