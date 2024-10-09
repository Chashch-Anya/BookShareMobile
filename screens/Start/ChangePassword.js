import { changePassword } from "../../backend/auth/ResetPassword";
import React, {useState} from "react";
import { BaseTextInput, ButtonDone, ButtonText, ExtraText, ExtraView, FormArea, InnerContainer, InputLabel, PageTitle, StyledContainer, SubTitle, TextLink, TextLinkContent } from "../../components/styles";
import { HorizontalLine } from "../../components/Line/НorizontalLine";

const ChangePassword = ( {navigation} ) => {
    const [email,setEmail] = useState('');

    return(
    <StyledContainer>
        <InnerContainer>
            <SubTitle>Восстановление пароля</SubTitle>
            <FormArea>
                <InputLabel>Email *</InputLabel>
                <BaseTextInput 
                placeholder="Введите email..."
                onChangeText={(email)=> setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}/>
            
                <ButtonDone onPress={() => changePassword(email)}>
                    <ButtonText>Отправить</ButtonText>
                </ButtonDone>
                
                <HorizontalLine/>
                
                <ExtraView>
                    <TextLink onPress={() => navigation.navigate('LogIn')}>
                        <TextLinkContent>Войти</TextLinkContent>
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
    )
}

export default ChangePassword;
