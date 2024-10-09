// Функция удаления книги из БД
// reviewID - ID отзыва
// ----------------------------
import {firebase} from '../config/config';
import { useNavigation } from "@react-navigation/native";

export async function deleteReview(reviewID){

    await firebase.firestore().collection('reviews').doc(reviewID).delete()
    .then(() => {

            alert(`Отзыв на "${bookName}" удален`);
            // const navigation = useNavigation();
            // navigation.navigate("BookReview");

        }).catch((error) => {
        alert(error.message);
    })
}