import { StartNavigation } from './navigation/AppNavigtion';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {firebase} from './backend/config/config';
import { MainNavigation } from './navigation/MainNavigation';
import { ModalPortal } from 'react-native-modals';

function App() { 
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;},[]);

  if (initializing) return null;

  if (!user)
  {
  return  (<><StartNavigation /><ModalPortal /></>);
  }
  return (<><MainNavigation /><ModalPortal /></>)

}

export default () =>{
  return(
    <NavigationContainer><App/></NavigationContainer>
  )
}