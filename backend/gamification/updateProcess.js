// Функция обновления процеса пользоателя
// points- очки
// level - уровень
// id - id процесса в бд
// -------------------------------

import {firebase} from '../config/config';

export function updateProcess(points, level,id) {
    const user = firebase.auth().currentUser.uid;

    const process = {
        user: user,
        level: level,
        points: points,
    };

    console.log(process)


    firebase.firestore().collection('process').doc(id).update(process)
        .then(() => {
            console.log();
        }).catch((error) => {
            console.log(error.message);
        })
}