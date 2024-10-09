import { StyleSheet,Text, View } from "react-native";
import React, {useState} from "react";
import { registerUser} from "../../backend/auth/Registration";
import { BaseTextInput, ButtonDone, ButtonText, ExtraText, ExtraView, FormArea, InnerContainer, InputLabel, PageTitle, StyledContainer, SubTitle, TextLink, TextLinkContent } from "../../components/styles";
import { HorizontalLine } from "../../components/Line/НorizontalLine";
import { useTogglePasswordVisibility } from "../../components/useTogglePasswordVisibility";
import { PasswordView, VisibleView } from "../../components/PasswordField/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Registration = ({navigation}) =>{
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
        lastName:'',
        firstName:'',
        confirmPassword:''
    })

    const {email, password, lastName,firstName,confirmPassword}= userInfo;
    const [error,setError]= useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    const handleOnChangeTest = (value, fieldName) => {
        setUserInfo({ ...userInfo,[fieldName]: value});
    };

    const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateError("Необходимо заполнить все поля", setError)
        if (password !== confirmPassword) return updateError('Пароли не совпадают', setError)
        
        return true;
    }

    const sumbitForm = () => {
        if(isValidForm()){
            registerUser(email,password,firstName,lastName)
        }
    }
    
    return(
        <StyledContainer>
            <InnerContainer>
            <PageTitle>FlexberryBook</PageTitle>
        <SubTitle>Регистрация</SubTitle>

        <FormArea>
            <View>
                {error ? <Text style={{color: 'red', padding: 5,}}>{error}</Text>: null}
            </View>
        <InputLabel>Email *</InputLabel>
        <BaseTextInput 
            placeholder="Введите email..."
            onChangeText={value => handleOnChangeTest(value , 'email')}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
        />

        <InputLabel>Фамилия *</InputLabel>
        <BaseTextInput 
            placeholder="Введите фамилию..."
            onChangeText={value => handleOnChangeTest(value ,'lastName')}
            autoCapitalize="none"
            autoCorrect={false}
            value={lastName}
        />

        <InputLabel>Имя *</InputLabel>
        <BaseTextInput 
            placeholder="Введите имя..."
            onChangeText={value => handleOnChangeTest(value ,'firstName')}
            autoCapitalize="none"
            autoCorrect={false}
            value={firstName}
        />
        
        <InputLabel>Пароль *</InputLabel>
        <PasswordView>
        <BaseTextInput 
            placeholder="Введите пароль..."
            onChangeText={value => handleOnChangeTest(value ,'password')}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            value={password}
        />
         <VisibleView  onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </VisibleView>
        </PasswordView>

        <InputLabel>Подтверждение пароля *</InputLabel>
        <PasswordView>
        <BaseTextInput 
            placeholder="Введите пароль..."
            onChangeText={value => handleOnChangeTest(value ,'confirmPassword')}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}  
            value={confirmPassword}
        />
         <VisibleView  onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </VisibleView>
        </PasswordView>
        
        {/* <ButtonDone onPress={() => registerUser(email,password,firstName,lastName)}> */}
        <ButtonDone onPress={sumbitForm}>
          <ButtonText>Готово</ButtonText>
        </ButtonDone>

        <HorizontalLine/>

        <ExtraView>
          <ExtraText>Уже зарегистрированы? </ExtraText>
          <TextLink onPress={() => navigation.navigate('LogIn')}>
              <TextLinkContent>Войти в систему</TextLinkContent>
          </TextLink>
        </ExtraView>

        </FormArea> 
            </InnerContainer>
        </StyledContainer>
    )
}

export default Registration;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const isValidObjField = (obj) => {
    return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
    console.log("error" + error)
    stateUpdater(error);
    setTimeout(() => { stateUpdater('')}, 5000);
}
