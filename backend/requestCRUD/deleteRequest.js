// Функция удаления заявки
// request_id - id заявки
// ----------------------------
import {firebase} from '../config/config';
import { Alert } from 'react-native';

export async function deleteRequest(request_id){

    await firebase.firestore().collection('requests').doc(request_id).delete()
    .then(() => {
            Alert.alert('Сообщение',`Заявка отменена`);
        }).catch((error) => {
        console.log(error.message);
    })
}