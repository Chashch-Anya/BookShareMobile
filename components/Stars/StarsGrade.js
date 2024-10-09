import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

const StarSolid = ()=> {
    return(<MaterialIcons name="star" size={40} color="#FFA000"/>)
}
     
const StarBorder = ()=> {
    return(<MaterialIcons name="star-border" size={40} color="#FFA000" />)
}

const StarHalf = () => {
    return(<MaterialIcons name="star-half"  size={40} color="#FFA000" />)
}

export function StarsGrade(grade){

    const num = grade;
    var ost =0;
    if (num!=0) ost = num.toString().split('.')[1].charAt(0);
    let stars = [];

    let i =1;
    for (i; i<= 5; i++){
        if (i <= grade){ stars.push(<StarSolid/>) }
        else
        if (ost > 4){ stars.push(<StarHalf/>) }
        else{ stars.push(<StarBorder/>) }
    }
    return stars;
}


const SmallStarSolid = ()=> {
    return(<MaterialIcons name="star" size={20} color="#FFA000"/>)
}
     
const SmallStarBorder = ()=> {
    return(<MaterialIcons name="star-border" size={20} color="#FFA000" />)
}

const SmallStarHalf = () => {
    return(<MaterialIcons name="star-half"  size={20} color="#FFA000" />)
}

export function SmallStarsGrade(grade){

    let stars = [];

    let i =1;
    for (i; i<= 5; i++){
        if (i <= grade){ stars.push(<SmallStarSolid/>) }
        else{ stars.push(<SmallStarBorder/>) }
    }
    return stars;
}


