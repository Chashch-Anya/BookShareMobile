import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { readImageBook } from "../backend/img/readImage";

const BookInfoPaperSection=({bookID,book_info})=>{
    
        let img_url;
        img_url = readImageBook(book_info.image);
        
        return(
            <><View style={{ flex: 1 }}>
                <ImageBackground
                    source={{ uri: img_url }}
                    resizeMode="cover"
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}>
                <View style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.5);',
                    }} >
                </View>
                </ImageBackground>
    
                <View style={{flex:5, paddingTop: 15, alignItems:'center'}}>
                    <Image source={{ uri: img_url }}
                            resizeMode="contain"
                            style={{flex: 1,
                            width: 200,
                            height: "auto"}} />
                </View>
    
                <View style={{ flex: 1.8, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{color:'black', fontSize: 20, fontWeight: "500"}}>{book_info.bookName}</Text>
                    <Text style={{color:'black'}}>{book_info.author}</Text>
                </View>
                </View>
        </>
        )
}

export default BookInfoPaperSection;
