/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());

  return (
    <>
      <SafeAreaView>
        <View style={styles.main}>
          <View style={styles.time}>
            <View style={styles.timeView}>
              <View style={styles.itembox}>
                <DatePicker
                  style={styles.item}
                  // display={Platform.OS === 'ios' ? 'inline' : 'default'}
                  mode={'time'}
                  date={date}
                  locale="fr"
                  onDateChange={setDate}
                />
              </View>
              <View style={styles.itembox}>
                <DatePicker
                  style={styles.item}
                  mode={'time'}
                  locale="fr"
                  date={enddate}
                  onDateChange={val => {
                    setEnddate(val);
                    console.log(val);
                    console.log(moment(val).get('hour'));
                    console.log(moment(val).get('minute'));
                  }}
                />
              </View>
            </View>
            <View style={styles.row}>
              <Text>
                {moment(date).get('hour')}:{moment(date).get('minute')}
              </Text>
              <Text>
                {moment(enddate).get('hour')}:{moment(enddate).get('minute')}
              </Text>
            </View>
          </View>
          <View style={styles.date}>
            <DatePicker
              style={styles.item}
              mode={'date'}
              locale="fr"
              date={enddate}
              onDateChange={val => {
                setEnddate(val);
                console.log(val);
                console.log(moment(val).get('hour'));
                console.log(moment(val).get('minute'));
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 20,
    width: '100%',
    backgroundColor: Colors.lighter,
  },
  time: {
    width: '100%',
  },
  timeView: {
    width: '100%',
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
  },
  itembox: {
    width: 120,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 120,
  },
  date: {
    width: 300,
  },
});

export default App;
