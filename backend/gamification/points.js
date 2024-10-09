// Получение количества очков для действия
export const Points = (action) => {

    switch(action){
        case "AddBook":
            return 25;
        case "ReadBook":
            return 25;
        case "AddReview":
            return 10;
        case "AddScore":
            return 5;
        // case "AddScore":
        //     return 5;
    }
}