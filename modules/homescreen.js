// Homescreen.js
import React from 'react';
import {Button, View, Text, Image} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>Images were created on www.craiyon.com.</Text>
      <Image source={require('../assets/sunset3.png')} />
      <Text>These images are from AI</Text>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title="Go to Screen2"
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
    </View>
  );
}
