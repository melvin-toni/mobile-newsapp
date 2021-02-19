import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './src/components/Header';
import Card from './src/components/Card';

const loadFonts = () => {
  return Font.loadAsync({
    'JosefinsansLight': require('./assets/fonts/JosefinSans-Light.ttf'),
    'JosefinsansBold': require('./assets/fonts/JosefinSans-SemiBold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.log('font load failed')}
      />
    );
  }

  return (
    <View>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
});
