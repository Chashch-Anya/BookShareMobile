import { firebase } from "../config/config";

export function checkCurrentUser(id){
    const userID = firebase.auth().currentUser.uid;
    if (userID == id)
    {
        return true;
    }
    return false;
}