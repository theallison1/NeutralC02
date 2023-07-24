

import * as React from 'react';
import {  View, Text, SafeAreaView } from 'react-native';
import Button from './Button'
import Background from './Background'
const SecondPage = ({ navigation }) => {
  return (
   <Background>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Segunda pagina
          </Text>
        
            <Button
            mode="contained"
            onPress={() => navigation.navigate('FirstPage')}>
            primera pagina
          </Button>
         <Button
            mode="contained"
            onPress={() => navigation.navigate('ThirdPage')}>
            tercera pagina
          </Button>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: '#080808' }}>
          Demo NetralC02
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#080808' }}>
          https://emprelabs.com/
        </Text>
      </View>
    </Background>
  );
};

export default SecondPage;
