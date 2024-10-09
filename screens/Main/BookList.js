import { ActivityIndicator, FlatList, Pressable, RefreshControl, SafeAreaView,  Text,  View } from "react-native"
import {  Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import React,{  useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import  {readBooks}  from "../../backend/bookCRUD/ReadBooks";
import BookItem from "../../components/BookItem/BookItem";
import { BottomModal, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from "react-native-modals";
import { readCategories } from "../../backend/categoryCRUD/readCategory";

const BookList = () => {
    
    all_books = readBooks();
    no_sort = all_books;
    all_category = readCategories();
    const [input,setInput] = useState("");
    const [modalSortVisible, setModalSortVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState([]);
    
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"FlexberryBooksharing",
            headerTitleStyle:{
                fontSize:20,
                fontWeight: "bold",
                color: "white",
            },
    
            headerStyle:{
                backgroundColor: "#840780",
                height: 120,
            },
            headerTitleAlign: 'center',
        })
    },[])

    const applySorting = (sort)=>{
        setModalSortVisible(false)
        switch(sort){
            case "По умолчанию":
                all_books=no_sort;
            break;
            
            case "По популярности":
                all_books= SortByBookReaders(all_books);
            break;
            
            case "По оценке":
                all_books= SortByBookGrade(all_books);
            break;

            case "По названию книги":
                all_books= SortByBookName(all_books);
            break;

            case "По автору книги":
                all_books= SortByAuthor(all_books);
            break;
        }
    }

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

            <Pressable style={{
                flexDirection:"row",
                justifyContent: "space-between",
                paddingHorizontal:20,
                padding:12,
                backgroundColor:"white"
                }}>
                
                <Pressable onPress={()=>setModalSortVisible(!modalSortVisible)}>
                    <Icon name="sort-amount-up-alt" size={20}/>
                </Pressable>

            </Pressable>

            <SafeAreaView style={{marginBottom:230}}>
                <FlatList 
                    data={all_books} 
                    renderItem={({item}) =>{
                        if(item.bookName.toUpperCase().includes(input.toUpperCase()) 
                        || item.author.toUpperCase().includes(input.toUpperCase())){
                            return(
                            <BookItem
                                id={item.id}
                                bookName={item.bookName}
                                author={item.author}
                                image={item.image}
                                owner={item.owner}
                                category={item.category}
                                all_category={all_category}
                                grade={item.grade}
                                readers={item.readers}
                            />
                            )
                        }
                    }}
                />
            </SafeAreaView>

            <BottomModal 
                onBackdropPress={()=>setModalSortVisible(!modalSortVisible)}
                swipeDirection={["up","down"]}
                swipeThreshold={200} 
                footer={
                <ModalFooter style={{ backgroundColor:"#840780"}}>
                    <Pressable 
                            onPress={() => applySorting(selectedFilter)}
                        style={{paddingRight:10, marginLeft:"auto", marginRight:"auto", marginVertical:10}}>
                        <Text style={{color:"white", fontWeight:500}}>Применить</Text>
                    </Pressable>
                </ModalFooter>}
                modalTitle={<ModalTitle title="Сортировка"/>}
                modalAnimation={new SlideAnimation({
                    slideFrom:"bottom",
                })}
                onHardwareBackPress={()=>setModalSortVisible(!modalSortVisible)}
                visible={modalSortVisible}
                onTouchOutside={()=> setModalSortVisible(!modalSortVisible)}
                >
                <ModalContent style={{width:"100%", height:200}}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:2, height: 200, borderRightWidth:1, borderRightColor:"#E0E0E0"}}>
                            <Text style={{textAlign:"center", marginTop:10, fontSize:15}}>Сортировка</Text>
                        </View>
                        <View style={{flex:3}}> 
                                <Pressable
                                            onPress={() => setSelectedFilter("По умолчанию")}
                                            style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    {selectedFilter.includes("По умолчанию") ?
                                          (<Icon name="circle" size={15} color={"black"} solid/>): 
                                          (<Icon name="circle" size={15} color={"black"}/>)}
                                     <Text style={{fontSize:14, marginLeft:6}}>По умолчанию</Text>
                                 </Pressable>  

                                <Pressable
                                            onPress={() => setSelectedFilter("По названию книги")}
                                            style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    {selectedFilter.includes("По названию книги") ?
                                          (<Icon name="circle" size={15} color={"black"} solid/>): 
                                          (<Icon name="circle" size={15} color={"black"}/>)}
                                     <Text style={{fontSize:14, marginLeft:6}}>По названию книги</Text>
                                 </Pressable>

                                 <Pressable
                                            onPress={() => setSelectedFilter("По автору книги")}
                                            style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    {selectedFilter.includes("По автору книги") ?
                                          (<Icon name="circle" size={15} color={"black"} solid/>): 
                                          (<Icon name="circle" size={15} color={"black"}/>)}
                                     <Text style={{fontSize:14, marginLeft:6}}>По автору книги</Text>
                                 </Pressable>

                                 <Pressable
                                            onPress={() => setSelectedFilter("По оценке")}
                                            style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    {selectedFilter.includes("По оценке") ?
                                          (<Icon name="circle" size={15} color={"black"} solid/>): 
                                          (<Icon name="circle" size={15} color={"black"}/>)}
                                     <Text style={{fontSize:14, marginLeft:6}}>По оценке</Text>
                                 </Pressable>

                                 <Pressable
                                            onPress={() => setSelectedFilter("По популярности")}
                                            style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    {selectedFilter.includes("По популярности") ?
                                          (<Icon name="circle" size={15} color={"black"} solid/>): 
                                          (<Icon name="circle" size={15} color={"black"}/>)}
                                     <Text style={{fontSize:14, marginLeft:6}}>По популярности</Text>
                                 </Pressable>
                        </View>
                    </View>
                </ModalContent>
            </BottomModal>

        </View>
    )


}

const SortByBookName = (data)=> {
    return data.sort((a, b) => a.bookName.localeCompare(b.bookName))
}

const SortByAuthor = (data)=> {
    return data.sort((a, b) => a.author.localeCompare(b.author))
}

const SortByBookGrade =(data) =>{

    for (let j = data.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (data[i].grade < data[i + 1].grade) {
            let temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
          }
        }
      }
      return data;   
 }

const SortByBookReaders =(data) =>{
    for (let j = data.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (data[i].readers < data[i + 1].readers) {
            let temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
          }
        }
      }
      return data;   
}

export default BookList;

const styles = StyleSheet.create({
    searchBar: {
      marginTop: 15,
      backgroundColor: "#e4e4e4",
      shadowRadius: 0,
      shadowOpacity: 0,
    },
  });