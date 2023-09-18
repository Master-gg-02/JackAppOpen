/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Text,
  Alert,
  Animated,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {Picker} from 'react-native-wheel-pick';
// import WheelPicker, {
//   CommonPicker,
//   DateRangePicker,
//   DatePicker,
//   RegionPicker,
// } from '@yz1311/react-native-wheel-picker';
//这个组件和react-native-wheel-pick 有相同的Java类，Android 只能选择其一，或者更改Android源码，iOS两个组件皆可用

const App = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState('java');
  // const leftContent = <Text>Pull to activate</Text>;
  // const selectedLanguage = () => {};
  const pickerRef = useRef();
  const setSelectedLanguage = val => {
    console.log(val);
  };
  return (
    <>
      <SafeAreaView style={styles.sectionContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View>
            {/* <DatePicker
              style={{backgroundColor: '#90F7EC'}}
              mode={'time'}
              //date值可以不填，默认是当前时间
              date={new Date()}
              // isModal={true}
              onPickerConfirm={value => {
                console.log(value);
                //不管mode的值是哪一种, value均是一个Date对象, 需要转换为所需的值
                //譬如: 如果mode=='year', 则可以通过`moment(value).year()`
              }}
            /> */}
            {/* <View style={styles.compicker}>
              <CommonPicker
                showHeader={false}
                wheelStyles={{backgroundColor: 'blue'}}
                style={{width: 150}}
                pickerWrapperStyle={{backgroundColor: '#ff6700'}}
                pickerElevation={10}
                indicatorColor={'#6666'}
                pickerData={[
                  '刘备',
                  '张飞',
                  '关羽',
                  '赵云',
                  '黄忠',
                  '马超',
                  '魏延',
                  '诸葛亮',
                ]}
                selectedValue={['黄忠']}
              />
            </View> */}

            {/*  */}

            {/* <View style={styles.compicker} /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    // marginTop: 32,
    paddingHorizontal: 24,
  },
  scrollView: {
    paddingVertical: 24,
    backgroundColor: Colors.lighter,
  },
  compicker: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
