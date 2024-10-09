import { ButtonDone, ButtonText, InnerContainer, PageTitle, StyledContainer } from '../../components/styles';

const Start = ({ navigation }) => {
    return(
      <StyledContainer>
        <InnerContainer>
          <PageTitle>FlexxberryBook</PageTitle>
          <ButtonDone onPress={() => navigation.navigate('LogIn')}><ButtonText>Авторизоваться</ButtonText></ButtonDone>
          <ButtonDone onPress={() => navigation.navigate('Registration')}><ButtonText>Зарегистрироваться</ButtonText></ButtonDone>
        </InnerContainer>
      </StyledContainer>
    )
}

export default Start;
