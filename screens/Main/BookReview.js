import { Button, TextInput, TouchableOpacity,View, Text, SafeAreaView, StyleSheet } from "react-native"
import { addReview } from "../../backend/reviewCRUD/addReview";
import { useLayoutEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { addNewReview } from "../../backend/gamification/actions/addReview";
import { avarageGrade } from "../../backend/averageGrade";
import { readUserProcess } from "../../backend/gamification/readProcess";
import { useNavigation } from "@react-navigation/native";
import { BaseTextArea, ButtonText, InputLabel } from "../../components/styles";

const BookReview = ({route}) => {
  const {bookID,grade,bookName} = route.params;

  const navigation = useNavigation();
  useLayoutEffect(() =>{
      navigation.setOptions({
          headerShown: true,
          title:`Отзыв на "${bookName}"`,
          headerTitleStyle:{
              fontSize:20,
              fontWeight: "bold",
              color: "white",
          },
          headerStyle:{
              backgroundColor: "#840780",
              // height: 120,
          },
          headerTitleAlign: 'center',
      })
  },[])

    const [review, setReview] = useState('');
    // const [grade, setGrade] = useState('');

    const [starRating, setStarRating] = useState(null);
    var book_grade = avarageGrade(bookID);
    user_process = readUserProcess();

    return(
        <><SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{fontSize:15}}>Оцените прочитанную книгу</Text>
          <View style={styles.stars}>
            <TouchableOpacity onPress={() => setStarRating(1)}>
              <MaterialIcons
                name={starRating >= 1 ? 'star' : 'star-border'}
                size={50}
                style={starRating >= 1 ? styles.starSelected : styles.starUnselected} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(2)}>
              <MaterialIcons
                name={starRating >= 2 ? 'star' : 'star-border'}
                size={50}
                style={starRating >= 2 ? styles.starSelected : styles.starUnselected} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(3)}>
              <MaterialIcons
                name={starRating >= 3 ? 'star' : 'star-border'}
                size={50}
                style={starRating >= 3 ? styles.starSelected : styles.starUnselected} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(4)}>
              <MaterialIcons
                name={starRating >= 4 ? 'star' : 'star-border'}
                size={50}
                style={starRating >= 4 ? styles.starSelected : styles.starUnselected} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(5)}>
              <MaterialIcons
                name={starRating >= 5 ? 'star' : 'star-border'}
                size={50}
                style={starRating >= 5 ? styles.starSelected : styles.starUnselected} />
            </TouchableOpacity>
          </View>

          <Text style={{fontSize:15}}>При желании оставьте отзыв</Text>
          <BaseTextArea placeholder="Введите текст..."
            multiline={true}
            numberOfLines={5}
            onChangeText={(review) => setReview(review)}
            style={{textAlignVertical: 'top'}}
            autoCorrect={false} />
          
        </View>
      </SafeAreaView><View style={{ height: 90 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => addNewReview(bookID, review, starRating, book_grade, user_process)}
              style={{
                flex: 1,
                backgroundColor: '#840780',
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ButtonText>Отправить</ButtonText>
            </TouchableOpacity>
          </View>
        </View></>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    stars: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop:5,
      paddingBottom:10
    },
    starUnselected: {
      color: '#aaa',
    },
    starSelected: {
        color: '#ffb300',
      },});

export default BookReview;