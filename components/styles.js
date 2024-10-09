import styled from "styled-components";
import {ImageBackground, View, Text,Image,TouchableOpacity,ScrollView,Pressable, TextInput} from "react-native";
import  Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// const StatusBarHeight = Constants.statusBarHeight;

// colors----------
export const Colors ={
    primary:"#fff",
    brand:"#840780",
    disable: "#dcdcdc",
    secondary: "#efefef"
}

export const {primary, brand, disable, secondary} = Colors;
// ---------------

// main view components
export const StyledContainer = styled.View`
    flex:1;
    padding:25px 25px 0px 25px ;
    background-color: ${primary};
    align-items: center;
    justify-content: center;

`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    align-items: center;
    justify-content: center;
`;

export const StyledScrollView = styled.ScrollView`
    width: 100%;`

// ----------------------

// title components
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight:bold;
    color:${brand};
    padding:10px
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom:20px;
    letter-spacingL 1px;
    font-weight: bold;
`;
// -----------------------------

// button components
 export const ButtonDone = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    margin-top: 5px;
    height: 60px;
    text-align: center;
    width:100%;
 `;

export const BigButton = styled.TouchableOpacity`
    background-color: ${brand};
    border-radius: 10px;
    height: 100px;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
 `;

 export const ListButton = styled.TouchableOpacity`
    border: 1px solid ${brand}
    border-radius: 10px;
    height: 50px;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
 `;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size:16px;
    text-align: center;
`;

export const BigButtonText = styled.Text`
    color: ${primary};
    font-size:20px;
    text-align: center;
`;

export const ButtonListText = styled.Text`
color: ${brand};
font-size:20px;
text-align: center;
`;

// --------------------------------------------

// commponents for form

export const FormArea = styled.View`
    width:90%;
`;

export const BaseTextInput = styled.TextInput`
    background-color: ${secondary};
    padding:15px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    width: 100%;
`;

export const BaseTextArea = styled.TextInput`
    background-color: ${secondary};
    padding:15px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    font-size: 16px;
    margin-vertical: 3px;
    margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
    padding-left:5px;
    font-size: 13px;
    text-align: left;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding:10px;    
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    font-size:15px;
`;
// ---------------------------------

// link component
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center; 
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px
`;

// ----------------------------------



//  book card component

export const BookCard = styled.Pressable`
    margin:10px;
    flex-direction: row;
    background-color:${primary};
`;

export const CardImage = styled.Image`
    width: 80px;
    height: 120px;
`;

export const CardContentContainer = styled.View`
    padding:5px;
`;

export const CardMainContent = styled.View`
    align-item: center;
    padding:5px;
`;

export const CardTitle = styled.Text`
    width:72%;
    font-size:15px;  
    font-weight: bold;
    padding-bottom: 2px;
`;

export const CardSubTitle = styled.Text`
    font-size: 13px;
    color: gray;
    `;
 
export const CardAddInfo = styled.View`
    justify-content: space-between;
    flex-direction:row; 
    align-items:center;
    position: absolute;
    bottom: 0;
`
export const BookGrade = styled.View`
    justify-content: space-between;
    flex-direction:row; 
    align-items:center;
    margin: 5px
`;

export const Readers = styled.View`
    justify-content: space-between;
    flex-direction:row; 
    align-items:center;
    margin: 5px;
`;

// BookItem components
export const Request = styled.Pressable`
    margin:10px;
    background-color:${primary};
`;

export const RequestInfo = styled.View`
flex-direction: row;
`

export const RequestImage = styled.Image`
    width: 60px;
    height: 60px;
`;

export const RequestTitle = styled.Text`
    width:72%;
    font-size:15px;  
    font-weight: bold;
    padding-bottom: 2px;
`;
// --------------------------------------