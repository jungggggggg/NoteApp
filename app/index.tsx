import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import MainPage from './MainPage';

// 폰트 로드 함수
const loadFonts = async () => {
  await Font.loadAsync({
    'GodoB': require('../assets/GodoB.ttf'),
    'GodoM': require('../assets/GodoB.ttf'),
    'godoMaum': require('../assets/godoMaum.ttf'),
    'godoRounded L': require('../assets/godoRounded L.ttf'),
    'naverFont': require('../assets/naverFont.ttf'),
    'naverMom': require('../assets/naverMom.ttf'),
    'naverClean': require('../assets/naverClean.ttf'),
    'bamin': require('../assets/bamin.ttf'),
  });
};

export default function LoadFont() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAllFonts = async () => {
      await loadFonts();
      setFontsLoaded(true); // 폰트 로드 완료 시 상태 업데이트
    };

    loadAllFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return <MainPage />; // 폰트 로드 후 앱 화면 렌더링
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});