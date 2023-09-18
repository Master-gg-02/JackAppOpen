/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Text,
  Alert,
  Animated,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Swipeable from 'react-native-swipeable';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [listViewData, setListViewData] = useState(
    Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`})),
  );

  const leftContent = <Text>Pull to activate</Text>;
  // Animated.timing(0, {
  //     toValue: 50,
  //     tension: 30,
  //     friction: 0,
  //     velocity: 0
  // }).start();
  // Animated.timing(30, {
  //     toValue: 30,
  //     tension: 30,
  //     friction: 0,
  //     velocity: 0,
  //     useNativeDriver: false
  // }).start();

  const rightButtons = [
    <TouchableHighlight
      onPress={() => {
        console.log(1111);
      }}
      style={{
        backgroundColor: 'red',
        height: 50,
      }}>
      <Text>Button 1</Text>
    </TouchableHighlight>,
    <TouchableHighlight
      style={{
        backgroundColor: 'yellow',
        height: 50,
      }}>
      <Text>Button 2</Text>
    </TouchableHighlight>,
    ,
  ];
  return (
    <>
      <SafeAreaView>
        <View style={{backgroundColor: 'green', height: 50}}>
          <Swipeable
            useNativeDriver={true}
            onPanAnimatedValueRef={() => {}}
            style={{height: 50}}
            onPress={() => {
              console.log(1111);
            }}
            //  leftContent={leftContent}
            rightButtons={rightButtons}>
            <TouchableHighlight
              style={{flex: 1, height: 50}}
              onPress={() => {
                console.log(1111);
              }}>
              <Text style={{flex: 1, height: 50}}>列表</Text>
            </TouchableHighlight>
          </Swipeable>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBack: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  item: {
    width: 180,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
