import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { avarageGrade } from "../backend/averageGrade";
import { readersNum } from "../backend/readerNum";
import { reviewsNum } from "../backend/reviewNum";

const BookInfoNumsSection=({bookID,bookName})=>{
        const navigation = useNavigation();
        grade = avarageGrade(bookID);
        readers = readersNum(bookID);
        reviews= reviewsNum(bookID);

        return(
              <><View
                    style={{
                    flexDirection: 'row',
                    paddingVertical: 20,
                    margin: 5,
                    borderRadius: 5,
                    backgroundColor: "rgba(132,7,128,0.5)"
                }}
            >
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={() => navigation.navigate("ReviewList", { bookID: bookID, bookName:bookName })}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>{grade}</Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>Оценка</Text>
                    </TouchableOpacity>
                </View>
                <LineDivider />
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}
                        onPress={() => navigation.navigate("ReviewList", { bookID: bookID, bookName:bookName })}>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>{reviews}</Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>Отзывы</Text>
                    </TouchableOpacity>
                </View>
                <LineDivider />

                <View style={{ flex: 1, paddingHorizontal: 10, alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>{readers}</Text>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: "500" }}>Читатели</Text>
                </View>

            </View>
            <View>

                    {/* <OwnerCard>
                        <ViewImage>
                            <OwnerImage source={{ uri: "https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png" }} />
                        </ViewImage>
                        <OwnerInfo>
                            <CardTitle>{book_owner.firstName} {book_owner.lastName}</CardTitle>
                            <CardSubTitle>{book_owner.email}</CardSubTitle>
                        </OwnerInfo>
                    </OwnerCard> */}
                </View>
            </>
        
        )
}

export default BookInfoNumsSection;

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 5 }}>
            <View style={{ flex: 1, borderLeftColor: 'gray', borderLeftWidth: 1 }}></View>
        </View>
    )
}