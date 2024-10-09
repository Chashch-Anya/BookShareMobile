// Функция удаления книги из БД
// bookID - ID книги
// ----------------------------
import {firebase} from '../config/config';
import { useNavigation } from "@react-navigation/native";

export async function deleteBook(bookID){

    await firebase.firestore().collection('books').doc(bookID).delete()
    .then(() => {

            alert(`Книга "${bookName}" удалена`);
            const navigation = useNavigation();
            navigation.navigate("BookList");

        }).catch((error) => {
        alert(error.message);
    })
}