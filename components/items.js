import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState }  from 'react';

const Item = (props) =>{
    //const [favourate, setFavoutare] = useState(false)
   // const [heart, setHeart] = useState(require('../assets/heart_white.png'))
    return(
        <View style = {styles.container}>
            <View style = {styles.viewImageItem}>
                <Image style={styles.stretch}
                    source={props.source}/>
            </View>
            <View style={styles.infor}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.price}</Text>
            </View>

            <TouchableOpacity style = {styles.viewImageHeart}
                onPress={props.onPress}>
                <Image style={styles.heart}
                
                source={props.favourate ? require('../assets/heart_red.png') : require('../assets/heart_white.png')}/>
            </TouchableOpacity>
            
        </View>
    )
}
export default Item;

const styles = StyleSheet.create({
    container: {
      width: 300,
      height: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      //flex: 1,
      flexDirection: "row",
      margin: 10
    },
    infor:{
        flexDirection: "column",
        flex: 2,
        marginHorizontal:50
    },
    viewImageItem:{
        flex: 1,
    },
    stretch:{
        
        width:90,
        height:90,
        resizeMode: "stretch",
        margin:10
    },
    text:{
        margin:10,
        fontSize: 20,

    }, 
    heart:{
        
        width: 25,
        height: 25,
        resizeMode: "stretch",
        margin:10
    },
    viewImageHeart:{
        flex: 1
    }
  });
  

