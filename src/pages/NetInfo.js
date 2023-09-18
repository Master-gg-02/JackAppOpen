import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Platform, ScrollView} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Table, Row, Rows} from 'react-native-reanimated-table';
import _ from 'lodash';
const App = () => {
  const [isWifiEnabled, setIsWifiEnabled] = useState('');
  const [tableHead, setTableHead] = useState(['key', 'value']);
  const [tableData, setTableData] = useState([]);
  const [netStatusData, setNetStatusData] = useState([]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      let netStatus = {
        'Connection Type': state?.type,
        'is connected': state?.isConnected?.toString(),
        'is InternetReachable': state?.isInternetReachable?.toString(),
      };
      setNetStatusData(_.toPairs(netStatus));
      if (Platform.OS === 'android') {
        setIsWifiEnabled(state?.isWifiEnabled.toString()); //only android is supported
      }
      state.details.isConnectionExpensive = state?.details?.isConnectionExpensive?.toString();
      state.details.ssid = state?.details?.ssid || 'none';
      state.details.bssid = state?.details?.bssid || 'none';
      setTableData(_.toPairs(state?.details));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const TableView = ({headData, rowsData}) => {
    return (
      <View>
        <Table borderStyle={styles.tableBorder}>
          <Row data={headData} style={styles.head} textStyle={styles.text} />
          <Rows data={rowsData} style={styles.row} textStyle={styles.text} />
        </Table>
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainBox}>
      <Text style={styles.textTitle}>network details</Text>
      <TableView headData={tableHead} rowsData={tableData} />
      <Text style={styles.textTitle}>network status</Text>
      <TableView headData={tableHead} rowsData={netStatusData} />
      {Platform.OS === 'android' ? (
        <Text style={styles.textTitle}>Is isWifiEnabled:{isWifiEnabled}</Text>
      ) : (
        <></>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainBox: {
    flexDirection: 'column',
  },
  textTitle: {
    marginVertical: 30,
    paddingHorizontal: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footButton: {
    width: 100,
    height: 50,
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: 'rgba(255,103,0,0.3)',
  },
  head: {
    height: 40,
    backgroundColor: '#ff6700',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  row: {
    height: 35,
  },
  text: {
    textAlign: 'left',
    paddingLeft: 20,
  },
});
export default App;
