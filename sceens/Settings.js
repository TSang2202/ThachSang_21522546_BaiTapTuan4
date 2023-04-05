import { RootTagContext, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RadioButton } from 'react-native-paper';


export default Settings = () =>{
     const [checked, setChecked] = React.useState('Light');
    

  return (
    <View style = {styles.container}>
        <View style ={{flexDirection: 'row'}}>
            <Text style={styles.text}>Light</Text>
            <RadioButton
                value="Light"
                status={ checked === 'Light' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Light')}
            />
        </View>
        
        <View style ={{flexDirection: 'row'}}>
            <Text style={styles.text}>Dark</Text>
            <RadioButton
                value="Dark"
                status={ checked === 'Dark' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('Dark')}
        />
        </View>
      
    </View>
  );
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
        text:{
            margin:10,
            fontSize: 20,
    
        }, 
    }
    
)