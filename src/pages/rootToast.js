/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native-elements';
import {SafeAreaView, View} from 'react-native';

import Toast from 'react-native-root-toast';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{marginTop: 50}}>
        <Button
          title={'API rootToast'}
          style={{marginTop: 50}}
          onPress={() => {
            let toast = Toast.show('This is a message', {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
              onShow: () => {
                // calls on toast\`s appear animation start
              },
              onShown: () => {
                // calls on toast\`s appear animation end.
              },
              onHide: () => {
                // calls on toast\`s hide animation start.
              },
              onHidden: () => {
                // calls on toast\`s hide animation end.
              },
            });
            console.log(toast);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
