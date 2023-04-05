import { StyleSheet, Text, View, Image } from 'react-native';
import React  from 'react';

const Description = (props) =>{
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>Description: </Text>
            <Text style={styles.descr} numberOfLines={5}>{props.description}</Text>
        </View>
    )
}
export default Description;

const styles = StyleSheet.create({
    container: {
      width: 300,
      height: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius:10,
      flex: 1,
      flexDirection: "row",
      margin: 10,
      flexDirection: 'column'
    },
    
    text:{
        margin:10,
        fontSize: 20,

    },
    descr:{
        margin:10,
        fontSize: 18,
    }
  });
  

