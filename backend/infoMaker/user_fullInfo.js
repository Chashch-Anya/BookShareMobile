import { readImage } from "../img/readImage";
import { readOneUser } from "../userCRUD/readOneUser";

export function userMaker(id){

    user = readOneUser(id);
    img_url = readImage(user.image);

    user_info=[{
        id: id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: img_url
    }]

    return user_info;
}