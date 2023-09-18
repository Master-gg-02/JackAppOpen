/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Button} from 'react-native-elements';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
const App = () => {
  const toastDemo = useToast();

  useEffect(() => {
    toastDemo.show('Hello World');
  }, [toastDemo]);
  return (
    <SafeAreaView>
      <View style={{marginTop: 50}}>
        <Button
          title={'API toast2'}
          style={{marginTop: 50}}
          onPress={() => {
            // toastDemo.show('Task finished successfully', {
            //   type: 'normal', //normal | success | warning | danger | custom",
            //   placement: 'top', //bottom
            //   duration: 2000,
            //   offset: 100,
            //   animationType: 'zoom-in', //slide-in
            // });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
