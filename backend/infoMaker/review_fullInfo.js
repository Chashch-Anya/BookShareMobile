import { readOneBook } from "./bookCrud/readOneBook";
import { readOneReview } from "./reviewCRUD/readOneReview";
import { userMaker } from "./user_fullInfo";

export async function reviewMaker(id) {
    review = readOneReview(id)
    book = readOneBook(review.bookID);
    user = userMaker(review.userID);

    revie_fullInfo = [{
        id: id,
        book: book,
        user: user,
        grade: review.grade,
        text: review.review,
        date: review.date
    }]

    return revie_fullInfo;
}
