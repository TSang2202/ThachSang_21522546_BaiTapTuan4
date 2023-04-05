import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from '../components/items'
import Description from '../components/description';

import Products from '../datas/Products'



export default Home = () =>{
    const [selectItem, setSelectItem] = useState(null)
    //console.log(Products)

    if (selectItem == null){
        return(
            
            <View style={styles.container}>
                <FlatList
                data ={Products}
                keyExtractor={item => item.id}
                renderItem = {({item}) =>{
                    return(
                        <TouchableOpacity
                            onPress = {() => setSelectItem(item)}>
                            <Item
                                source = {item.image}
                                name = {item.name}
                                price = {item.price}
                                favourate = {item.favourate}
                                onPress = {() =>{
                                   
                                }}
                            ></Item>    
                        </TouchableOpacity>   
                    )     
                }}
                />
            </View>
            
        )
    }
    else{
        return(
            <View style={styles.container}>
                <View style = {styles.item}>
                    <Item
                        source = {selectItem.image}
                        name = {selectItem.name}
                        price = {selectItem.price}
                        favourate = {selectItem.favourate}
                    ></Item>  
                </View>
                
                <Description description = {selectItem.description}/>

                <TouchableOpacity style = {styles.button}
                    onPress={() => {
                        setSelectItem(null)
                    }}>
                    <Text>Back</Text>    
                </TouchableOpacity> 
            </View>
        )
    }

    
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        button:{
            backgroundColor: '#cccccc',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            margin: 5,
            padding: 4,
            width: 80
        },
        item:{
           // margin: 10
        }
    }
    
)