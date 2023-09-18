/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

// Import
import InputText from 'react-native-input-validator';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  //  this.input.isValidated(); // Faster: Check validation state
  // this.input.isValid(); // Alternative safer: Validate and check validation state

  render() {
    return (
      <SafeAreaView>
        <View style={styles.mainbox}>
          <Text style={styles.name}>email</Text>
          <InputText
            symbol="email"
            onRef={r => {
              this.input = r;
            }}
            type="email"
            value={this.state.value}
            style={styles.input}
            onChangeText={text => {
              this.setState({value: text});
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainbox: {
    padding: 20,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  name: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    fontSize: 18,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
