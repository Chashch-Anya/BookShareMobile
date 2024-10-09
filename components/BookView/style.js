import styled from "styled-components";
import { Colors } from "../styles";

//  book card component

export const BookCard = styled.Pressable`
    margin:10px;
    flex-direction: row;
    background-color:${Colors.primary};
`;

export const CardImage = styled.Image`
    width: 100px;
    height: 150px;
`;

export const CardContentContainer = styled.View`
    padding:5px;
`;

export const CardMainContent = styled.View`
    align-item: center;
    padding:5px;
`;

export const CardTitle = styled.Text`
    width:68%;
    font-size:15px;  
    font-weight: bold;
    padding-bottom: 2px;
`;

export const CardSubTitle = styled.Text`
    font-size: 13px;
    color: gray;
    `;
 
export const CardAddInfo = styled.View`
    padding: 10px 0px 0px 10px;
`
export const BookGrade = styled.View`
    justify-content: space-between;
    flex-direction:row; 
    align-items:center;
    margin: 5px;
`;

export const Readers = styled.View`
    justify-content: space-between;
    flex-direction:row; 
    align-items:center;
    margin: 5px;
`;


export const TitleContent = styled.View`
justify-content: space-between;
flex-direction:row; 
align-items:center;`


export const CategoryArea = styled.View`
    flex-direction:row; 
    align-items:center;
    margin-top: 10px;
    `

export const CategoryView = styled.View`
    background-color: ${Colors.brand};
    border-radius: 145px;
    margin-left: 5px;
`

export const CategoryText = styled.Text`
    color: white;
    padding: 5px;
    text-align: center;
    font-size: 10px;
    `