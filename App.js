import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './sceens/Home'
import Favourates from './sceens/Favourate'
import Settings from './sceens/Settings';


export default function App() {

  
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Tab.Navigator >
        <Tab.Screen
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source = {require('./assets/images/home.png')}
                  resizeMode='contain'
                  style ={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }} 
                />
              </View>
            )
          }}/>
        <Tab.Screen 
          name="Favourates" 
          component={Favourates}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source = {require('./assets/images/heart_white.png')}
                  resizeMode='contain'
                  style ={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }} 
                />
              </View>
            )
          }}
          />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source = {require('./assets/images/setting.png')}
                  resizeMode='contain'
                  style ={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#e32f45' : '#748c94'
                  }} 
                />
              </View>
            )
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
