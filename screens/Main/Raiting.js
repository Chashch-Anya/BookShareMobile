import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View } from "react-native"
import { readAllProcess } from "../../backend/gamification/readAllProcess";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import UserItem from "../../components/UserItem/userItem";

const Rating = () => {
    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: true,
            title:"Рейтинг",
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

    user_pr = readAllProcess();

    return(<View>
        <SafeAreaView>
            <FlatList 
                data={Sorting(user_pr)}
                renderItem={({item,index}) =>{
                    return(
                        <UserItem
                            user_id={item.user}
                            level={item.level}
                            points={item.points}
                            place={index+1}
                        />
                    )
                }}
            />
        </SafeAreaView>

    </View>)
}

export default Rating;

function Sorting(data){
    for (let j = data.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (data[i].level < data[i + 1].level) {
            let temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
          } else
          if (data[i].level = data[i + 1].level) {
            if (data[i].points < data[i + 1].points) {
                let temp = data[i];
                data[i] = data[i + 1];
                data[i + 1] = temp;
            }
          }

        }
      }
      return data;   
}