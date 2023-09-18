/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button} from 'react-native';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {ToastContext, useToast} from 'react-native-styled-toast';

const App = () => {
  const {toast} = useToast();
  return (
    <SafeAreaView>
      <View style={styles.toastBox}>
        <View style={styles.apiClass}>
          <ToastContext.Consumer>
            {({toast}) => {
              return (
                <Button
                  onPress={() =>
                    toast({
                      message: 'Woo! This is a success toast.',
                    })
                  }
                  title="component Toast"
                />
              );
            }}
          </ToastContext.Consumer>
        </View>
        <View style={styles.apiClass}>
          <Button
            title={'API toast'}
            style={styles.apiClass}
            onPress={() =>
              toast({
                message: 'My First Toast!',
                toastStyles: {
                  bg: 'lightblue',
                  borderRadius: 16,
                },
                color: 'white',
                iconColor: 'white',
                iconFamily: 'Entypo',
                iconName: 'info',
                closeButtonStyles: {
                  px: 4,
                  bg: 'darkgrey',
                  borderRadius: 16,
                },
                closeIconColor: 'white',
                hideAccent: true,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  toastBox: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  apiClass: {
    marginBottom: 50,
    width: 200,
  },
});

export default App;
