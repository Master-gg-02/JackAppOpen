/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {ticketsPost} from '../api/postData';
import {firstGet} from '../api/getData';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{marginTop: 50}}>
        <Button
          title={'request zendesk'}
          style={{marginTop: 50}}
          onPress={() => {
            let data = {
              ticket: {
                comment: {
                  body: '我是海羽星.',
                },
                priority: 'urgent',
                subject: 'My printer is on fire!',
              },
            };
            ticketsPost(data);
          }}
        />
        <Button
          title={'request zendesk'}
          style={{marginTop: 50}}
          onPress={() => {
            let data = {
              ticket: {
                comment: {
                  body: 'The smoke is very colorful.',
                },
                priority: 'urgent',
                subject: 'My printer is on fire!',
              },
            };
            firstGet();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
