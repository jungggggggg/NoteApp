import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import MainPage from './MainPage';

// 폰트 로드 함수
const loadFonts = () => {
  return Font.loadAsync({
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

    useEffect(() => {
        loadFonts()
    },[])

  return <MainPage />; // 폰트 로드 후 앱 화면 렌더링
}