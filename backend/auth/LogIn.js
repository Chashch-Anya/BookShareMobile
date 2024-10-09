import {firebase} from '../config/config';

// user authentication function
export async function loginUser(email, password){
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error){
      alert('Ошибка. Проверьте правильно ввода данных');
    }
  };

