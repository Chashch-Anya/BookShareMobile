import { SafeAreaView, ScrollView, View ,StyleSheet,Pressable, FlatList} from "react-native"
import React, { useLayoutEffect, useState } from "react";
import { readSelectBooks } from "../../backend/selectCRUD/readSelectBook";
import BookItem from "../../components/BookItem/BookItem";
import { useNavigation } from "@react-navigation/native";
import {  Searchbar } from "react-native-paper";
import { readCategories } from "../../backend/categoryCRUD/readCategory";

const SelectedList = () => {
    const navigation = useNavigation();
    const [input,setInput] = useState("");
    all_category = readCategories();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Избранное",
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

    select_book = readSelectBooks();
    return(
        <View>
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
                    data={select_book} 
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
                                category={item.category}
                                all_category={all_category}
                            />
                            )
                        }
                    }}/>
            </SafeAreaView> 
        </View>
    )
}


const styles = StyleSheet.create({
    searchBar: {
      marginTop: 15,
      backgroundColor: "#e4e4e4",
      shadowRadius: 0,
      shadowOpacity: 0,
    },
  });

export default SelectedList;