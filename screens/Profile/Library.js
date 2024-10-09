import {Dimensions, FlatList, SafeAreaView, StyleSheet, View } from "react-native"
import React, { useLayoutEffect, useState } from "react";
import BookItem from "../../components/BookItem/BookItem";
import { readLibrary } from "../../backend/libraryCRUD/readLibrary";
import { Searchbar } from "react-native-paper";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { readReadedBooks } from "../../backend/libraryCRUD/readReadedBooks";

const initialLayout = { width: Dimensions.get('window').width };

const FirstRoute = () => {
    const [input,setInput] = useState("");

    books = readReadedBooks()
    for(var v of books){
        console.log(v.id)
    }
    return(<View>
         <Searchbar placeholder="Поиск..."
            placeholderTextColor="#333333"
            style={styles.searchBar}
            iconColor="#333333"
            inputStyle={{ color: "#333333" }}
            elevation={0}
            onChangeText={(text)=>setInput(text)}
            /> 
                <SafeAreaView style={{marginBottom:100}}>
                <FlatList 
                    data={books} 
                    renderItem={({item}) =>{
                        if(item.bookName.toUpperCase().includes(input.toUpperCase()) 
                        || item.author.toUpperCase().includes(input.toUpperCase())){
                            return(
                            <BookItem
                                id={item.id}
                                bookName={item.bookName}
                                author={item.author}
                                image={item.image}
                                grade={item.grade}
                                readers={item.readers}
                            />
                            )
                        }
                    }}/>
            </SafeAreaView>
    </View>)
};
  
const SecondRoute = () => {
    const [input,setInput] = useState("");

    books = readLibrary()
    return(<View>
         <Searchbar placeholder="Поиск..."
            placeholderTextColor="#333333"
            style={styles.searchBar}
            iconColor="#333333"
            inputStyle={{ color: "#333333" }}
            elevation={0}
            onChangeText={(text)=>setInput(text)}
            /> 
                <SafeAreaView style={{marginBottom:100}}>
                <FlatList 
                    data={books} 
                    renderItem={({item}) =>{
                        if(item.bookName.toUpperCase().includes(input.toUpperCase()) 
                        || item.author.toUpperCase().includes(input.toUpperCase())){
                            return(
                            <BookItem
                                id={item.id}
                                bookName={item.bookName}
                                author={item.author}
                                image={item.image}
                                grade={item.grade}
                                readers={item.readers}
                            />
                            )
                        }
                    }}/>
            </SafeAreaView>
    </View>)
};


const Library = ({navigation}) =>{

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Библиотека",
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
      { key: 'first', title: 'Прочитанное' },
      { key: 'second', title: 'Мои книги' },
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
        renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#840780'}}/>} 
      />
    );
}
const styles = StyleSheet.create({
    searchBar: {
      marginTop: 15,
      backgroundColor: "#e4e4e4",
      shadowRadius: 0,
      shadowOpacity: 0,
    },
  });
export default Library;