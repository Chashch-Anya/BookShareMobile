import { View, Text, Button,Dimensions, FlatList } from "react-native"
import { InnerContainer, StyledContainer, SubTitle } from "../../components/styles";

import { updateRequest } from "../../backend/requestCRUD/updateRequest";
import { readRequests } from "../../backend/requestCRUD/readRequests";
import { useLayoutEffect, useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import RequestItem from "../../components/RequestItem/RequestItem";
import { readOutRequests } from "../../backend/requestCRUD/readOutRequest";
import { useNavigation } from "@react-navigation/native";

const initialLayout = { width: Dimensions.get('window').width };

const FirstRoute = () => {
    request_list = readRequests();

    return(
    <View>
      <FlatList
          data={request_list}
          renderItem={({item}) =>{
            return(
            <RequestItem
                requestID={item.id}
                bookID={item.bookID}
                fromID={item.fromID}
                toID={item.toID}
                status={item.status}
        />
    )}}
      />
    </View>
)
};
  
const SecondRoute = () => {
  request_list = readOutRequests();

  return( 
  <View>
     <FlatList 
          data={request_list}
          renderItem={({item}) =>{
            return(
            <RequestItem
                requestID={item.id}
                bookID={item.bookID}
                fromID={item.fromID}
                toID={item.toID}
                status={item.status}
        />
    )}}
      />
  </View>
)};

const MsgList = () => {
  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
        headerShown: true,
        title:"Запросы",
        headerTitleStyle:{
            fontSize:20,
            fontWeight: "bold",
            color: "white",
        },
        headerStyle:{
            backgroundColor: "#840780",
            height: 80,
        },
        headerTitleAlign: 'center',
    })
},[])

    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'Входящие' },
      { key: 'second', title: 'Исходящие' },
    ]);
  
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
  

    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#840780'}}/>} // <-- add this line
      />
    );
}

export default MsgList;