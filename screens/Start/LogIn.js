import React, {useState} from "react";
import { loginUser } from "../../backend/auth/LogIn";
import { BaseTextInput, ButtonDone, ButtonText, ExtraText, ExtraView, FormArea, InnerContainer, InputLabel, PageTitle, StyledContainer, SubTitle, TextLink, TextLinkContent } from "../../components/styles";
import { HorizontalLine } from "../../components/Line/НorizontalLine";
import { useTogglePasswordVisibility } from "../../components/useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PasswordView, VisibleView } from "../../components/PasswordField/style";

const LogIn = ( {navigation} ) => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  
  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>FlexberryBook</PageTitle>
        <SubTitle>Вход в систему</SubTitle>

        <FormArea>
        <InputLabel>Email *</InputLabel>
        <BaseTextInput 
            placeholder="Введите email..."
            onChangeText={(email)=> setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}/>
        
        <InputLabel>Пароль *</InputLabel>
        <PasswordView>
          <BaseTextInput
            placeholder="Введите пароль..."
            onChangeText={(password)=> setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}/>
            
        <VisibleView  onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </VisibleView>
        </PasswordView>

        
        <ButtonDone onPress={() => loginUser(email,password)}>
          <ButtonText>Войти</ButtonText>
        </ButtonDone>
  
        <HorizontalLine/>

        <ExtraView>
          <ExtraText>Забыли пароль? </ExtraText>
          <TextLink onPress={() => navigation.navigate('ChangePassword')}>
              <TextLinkContent>Восстановить пароль</TextLinkContent>
          </TextLink>
        </ExtraView>

        <ExtraView>
          <TextLink onPress={() => navigation.navigate('Registration')}>
              <TextLinkContent>Еще не зарегистрированы? </TextLinkContent>
          </TextLink>
        </ExtraView>
        </FormArea>  
      </InnerContainer>
    </StyledContainer>
  );
}
export default LogIn;
