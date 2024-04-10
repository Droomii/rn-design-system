/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';

import Button from './src/common/button/Button.tsx';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button variant={'primary'}>프라이머리</Button>
      <Button variant={'secondary'} size={'xl'}>
        세컨더리
      </Button>
      <Button variant={'secondary'} disabled>
        디쓰에이블드
      </Button>
    </SafeAreaView>
  );
}

export default App;
