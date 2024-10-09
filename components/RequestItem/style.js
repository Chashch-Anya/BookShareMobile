import styled from "styled-components";
import { Colors } from "../styles";

export const CardContentContainer = styled.View`
    padding:5px;
`;

export const CardMainContent = styled.View`
    align-item: center;
    padding:5px;
`;

export const CardTitle = styled.Text`
    width:82%;
    font-size:15px;  
    font-weight: bold;
    padding-bottom: 2px;
`;

export const CardSubTitle = styled.Text`
    font-size: 13px;
    color: gray;
    `;

export const Request = styled.Pressable`
margin:10px;
background-color:${Colors.primary};
`;

export const RequestInfo = styled.View`
flex-direction: row;
`

export const RequestImage = styled.Image`
width: 60px;
height: 60px;
border-radius: 134px;
`;

export const RequestTitle = styled.Text`
width:72%;
font-size:15px;  
font-weight: bold;
padding-bottom: 2px;
`;

export const ButtonCircleBrand = styled.TouchableOpacity`
    background-color: ${Colors.brand};
    padding: 10px;
    justify-content: center;
    margin-top: 5px;
    height: 40px;
    text-align: center;
    width:50%;
    border-color:${Colors.brand};
    border-width:1px;
 `;


export const ButtonCircle = styled.TouchableOpacity`
    padding: 10px;
    justify-content: center;
    margin-top: 5px;
    height: 40px;
    text-align: center;
    width:50%;
    border-color:${Colors.brand};
    border-width:1px;
 `;

export const TitleContent = styled.View`
justify-content: space-between;
flex-direction:row; 
align-items:center;`