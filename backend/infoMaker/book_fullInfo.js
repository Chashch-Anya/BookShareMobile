import { useEffect, useState } from "react";
import { avarageGrade } from "../averageGrade";
import { readCategories } from "../categoryCRUD/readCategory";
import { readersNum } from "../readerNum";
import { readOneUser } from "../userCRUD/readOneUser";
import { readOneBook } from "../bookCRUD/readOneBook";

export async function bookMaker(id){

    const [owner, setOwner] = useState('');

    useEffect(()=>{
        readOneBook(id)
            .then(result => readOneUser(result.owner))
            .catch(console.log)
    },[user])
    console.log(owner)
    return owner
}
