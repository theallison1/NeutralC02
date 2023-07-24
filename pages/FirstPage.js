

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Background from './Background';
import Button from './Button';
import Logo from './Logo';
const FirstPage = ({ navigation }) => {
  return (
    <Background>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Logo />
          <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}>
            Login
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('RegisterScreen')}>
            Sign Up
          </Button>
        </View>

        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Demo NetralC02
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          https://emprelabs.com/
        </Text>
      </View>
    </Background>
  );
};

export default FirstPage;
