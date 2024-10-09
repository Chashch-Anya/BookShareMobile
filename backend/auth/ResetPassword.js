import {firebase} from '../../backend/config/config';
 
export function changePasswordCurrentUser(){
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(() => {
        alert("На вашу почту направлено сообщение о сбросе пароля")
    }).catch((error) => {
        alert(error)
    })
}

export function changePassword(email){
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("На вашу почту направлено сообщение о восстановлении пароля")
    }).catch((error) => {
        alert('Ошибка. Проверьте правильно ввода email')
    })
}