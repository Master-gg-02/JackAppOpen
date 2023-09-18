/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native-elements';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// import AlexaLinking from 'react-native-alexa-linking';
// import {Linking} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{marginTop: 50}}>
        <Button
          title={'API rootToast'}
          style={{marginTop: 50}}
          onPress={() => {
            let links = {
              appURL: '',
              fallbackURL: '',
            };
            // Linking.openURL('https://alexa.amazon.co.jp/api/skill/link/M22YGNJPZBBF6')
            // Linking.openURL('https://www.amazon.com/dp/B07XQZQZQZ')

            // links.appURL='https://www.amazon.com/dp/B07XQZQZQZ'
            // AlexaLinking.openURL("https://alexa.amazon.co.jp/api/skill/link/M22YGNJPZBBF6");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
