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
  View,
  Text,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Swipeout from 'react-native-swipeout';

// import {Swipeout } from 'react-native-gesture-handler';

// Buttons
// var swipeoutBtns = [
//     {
//         text: 'Button',
//         backgroundColor:'red',
//         onPress:()=>{
//             console.log(alert(1))
//         }
//     }
// ]

const App = () => {
  const [date, setDate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [listViewData, setListViewData] = useState(
    Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`})),
  );

  return (
    <>
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          {/* <Swipeout right={swipeoutBtns} >
                        <View style={{ height: 50 }}>
                            <Text>Swipe me left</Text>
                        </View>
                    </Swipeout> */}
          <Swipeout
            left={[
              {
                text: 'reply',
                onPress: () => console.log('reply'),
                style: {backgroundColor: 'orange', color: 'white'},
                className: 'custom-class-1',
              },
            ]}
            right={[
              {
                text: 'delete',
                onPress: () => console.log('delete'),
                style: {backgroundColor: 'red', color: 'white'},
                className: 'custom-class-2',
              },
            ]}
            onOpen={() => console.log('open')}
            onClose={() => console.log('close')}>
            <View style={{height: 50}}>
              <Text>Swipe me left</Text>
            </View>
          </Swipeout>
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
