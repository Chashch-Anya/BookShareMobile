import { Image, View } from "react-native";
import styled from "styled-components";
import { Colors } from "../styles";

export const UserCard = styled.View`
justify-content: space-between;
flex-direction:row; 
align-items:center;
`;

export const UserCardImage = styled.Image`
    padding:5px;
    margin: 10px;
    width:90px;
    height: 90px;
    border-radius: 145px;
`;

export const CardImageView =  styled.View`
`;

export const UserCardInfo = styled.View`
  width:100%;
    padding: 10px;
`;

export const PlaceNumView = styled.View`
    background-color: ${Colors.brand};
    border-radius: 145px;
    min-width: 20px;
    min-height: 20px;
    text-align: center;
    position: absolute;
    margin-left: 15px;
    margin-top: 15px;
    z-index: 100;
`

export const PlaceNum = styled.Text`
    font-size: 14px;
    text-align: center;
    padding: 1px;
    color:white
`
