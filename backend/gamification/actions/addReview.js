import { avarageGrade } from "../../averageGrade";
import { readersNum } from "../../readerNum";
import { addReview } from "../../reviewCRUD/addReview";
import { updateAverageGrade } from "../../updateAverageGradeBook";
import { addPoints } from "../addPoints";
import { readUserProcess } from "../readProcess";

export function addNewReview(bookID,review,starRating,book_grade,user_process){
    addReview(bookID,review,starRating);

    updateAverageGrade(bookID,book_grade);

    if (review!=null & review!=''){
        addPoints("AddReview",user_process);
    }else{
        addPoints("AddScore", user_process);
    }
}
