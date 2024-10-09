import {firebase} from '../config/config';

export async function registerUser(email, password, firstName, lastName) {
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(() => {
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                firstName, 
                lastName, 
                email, 
                password,
            })
        // })
        .catch((error) => {
            alert(error.message);
        });
    })
    .catch((error) => {
        alert(error.message);
    });   
 }
