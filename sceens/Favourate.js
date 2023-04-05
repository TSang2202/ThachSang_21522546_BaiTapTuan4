import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from '../components/items'
import Products from '../datas/Products'

const Data = Products.filter(item => item.favourate === true)

export default Favourates = () =>{
    
    return(
            
        <View style={styles.container}>
            <FlatList
            data ={Data}
            keyExtractor={item => item.id}
            renderItem = {({item}) =>{
                return(
                    <TouchableOpacity
                       >
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