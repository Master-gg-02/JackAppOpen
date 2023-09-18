/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Orientation from 'react-native-orientation';
import React, {useEffect, useRef} from 'react';
import {ThemeProvider} from 'styled-components';
import Theme from './src/components/Theme';
import {ToastProvider} from 'react-native-styled-toast';
// styled-toast和toast-notifications两个不可同时使用，若要看效果，请切换打开注释即可
// import {ToastProvider} from 'react-native-toast-notifications';
import {RootSiblingParent} from 'react-native-root-siblings';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DatePickerScreen from './src/pages/DatePicker';
import HomeScreen from './src/pages/HomeScreen';

import SwipeListExample from './src/pages/SwipeListExample';
import Swipeout from './src/pages/Swipeout';
import Swp from './src/pages/Swp';
// import SwipeableTS from './src/pages/swipeableTS';
import SwipeableThird from './src/pages/swipeable';
import NetInfo from './src/pages/NetInfo';
import OverlayScreen from './src/pages/Overlay';
import StyleToast from './src/pages/StyleToast';
import ToastScreen from './src/pages/Toast';
import rootToast from './src/pages/rootToast';

import ZendeskScreen from './src/pages/Zendesk';
import CameraScreen from './src/pages/CameraDemo';
import PhotoCalmn from './src/pages/PhotoCalmn';
import Validator from './src/pages/Validator';
import ReactForm from './src/pages/ReactHookForm';
import ReactForm2 from './src/pages/ReactHookForm2';
import alexaAppLink from './src/pages/alexaAppLink';
import pickerScreen from './src/pages/pickerScreen';
import ColorWheel from './src/pages/ColorWheel';
import VirtualizedList from './src/pages/VirtualizedList';
import DeviceInfo from './src/pages/DeviceInfo';

import {enableScreens} from 'react-native-screens';
console.disableYellowBox = true;
enableScreens();
const Stack = createNativeStackNavigator();
const App = props => {
  const useComponentWillMount = cb => {
    const willMount = useRef(true);

    if (willMount.current) {
      cb();
    }

    willMount.current = false;
  };
  useComponentWillMount(() => {
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      // do something
    } else {
      // do something else
    }
  });
  useEffect(() => {
    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      // do something
    } else {
      // do something else
    }
    Orientation.addOrientationListener(_orientationDidChange);
    return () => {
      Orientation.removeOrientationListener(_orientationDidChange);
    };
  }, []);

  // useEffect(() => {
  //   const initial = Orientation.getInitialOrientation();
  //   if (initial === 'PORTRAIT') {
  //     // do something
  //   } else {
  //     // do something else
  //   }
  // }, []);
  const _orientationDidChange = orientation => {
    console.log(orientation);
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
      console.log('横屏');
    } else {
      console.log('竖屏');
      // do something with portrait layout
    }
  };
  return (
    <RootSiblingParent>
      <ThemeProvider theme={Theme}>
        <ToastProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="DatePicker" component={DatePickerScreen} />
              <Stack.Screen name="Overlay" component={OverlayScreen} />
              <Stack.Screen name="SwipeListEx" component={SwipeListExample} />
              <Stack.Screen name="Swipeout" component={Swipeout} />
              <Stack.Screen name="Swp" component={Swp} />
              {/* <Stack.Screen name="SwipeableTS" component={SwipeableTS} /> */}
              <Stack.Screen name="Swiper" component={SwipeableThird} />
              <Stack.Screen name="NetInfo" component={NetInfo} />
              <Stack.Screen name="StyleToast" component={StyleToast} />
              {/* <Stack.Screen name="Toast" component={ToastScreen} /> */}
              <Stack.Screen name="rootToast" component={rootToast} />
              <Stack.Screen name="Zendesk" component={ZendeskScreen} />
              <Stack.Screen name="Camera" component={CameraScreen} />
              <Stack.Screen name="PhotoCalmn" component={PhotoCalmn} />
              <Stack.Screen name="Validator" component={Validator} />
              <Stack.Screen name="ReactForm" component={ReactForm} />
              <Stack.Screen name="ReactForm2" component={ReactForm2} />
              <Stack.Screen name="alexaAppLink" component={alexaAppLink} />
              <Stack.Screen name="picker" component={pickerScreen} />
              <Stack.Screen name="ColorWheel" component={ColorWheel} />
              <Stack.Screen name="DeviceInfo" component={DeviceInfo} />

              <Stack.Screen
                name="VirtualizedList"
                component={VirtualizedList}
              />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <Toast ref={ref => (global.toast = ref)} /> */}
        </ToastProvider>
      </ThemeProvider>
    </RootSiblingParent>
  );
};

export default App;
