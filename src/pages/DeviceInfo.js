import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  NativeEventEmitter,
  NativeModules,
  Platform,
} from 'react-native';
// import {getAndroidId, getUniqueId} from 'react-native-device-info';
import DeviceInfo, {
  getPowerState,
  getAvailableLocationProviders,
  useBatteryLevelIsLow,
  useBatteryLevel,
  usePowerState,
} from 'react-native-device-info';
import {Table, Row, Rows} from 'react-native-reanimated-table';
import _ from 'lodash';
import {objectBooleanToString} from '../utils';
const App = () => {
  const [tableHead, setTableHead] = useState(['key', 'value']);
  const [detail, setDdetail] = useState(null);

  const [info, setInfo] = useState({
    getApplicationName: '', //string
    getBrand: '', //string
    getBuildNumber: '',
    getDeviceId: '',
    getModel: '',
    getReadableVersion: '',
    getSystemName: '',
    getSystemVersion: '',
    getUniqueId: '',
    getVersion: '',
    hasNotch: '',
    getDeviceType: '',
  });
  const [infoOther, setInfoOther] = useState(null);

  const [infoAll, setInfoAll] = useState(null);
  const [powerInfo, setPowerInfo] = useState(null);
  const [locationProviders, setLocationProviders] = useState(null);
  const [apiName, setApiName] = useState([
    'getAndroidId',
    'getApiLevel',
    'getBaseOs',
    'getBatteryLevel',
    'getBootloader',
    'isCameraPresent',
    'getCarrier',
    'getCodename',
    'getDevice',
    'getDisplay',
    'getDeviceName',
    'getFirstInstallTime',
    'getFingerprint',
    'getFreeDiskStorage',
    'getFreeDiskStorageOld',
    'getHardware',
    'getHost',
    'getIpAddress',
    'getIncremental',
    'getInstallerPackageName',
    'getInstallReferrer',
    'getInstanceId',
    'getLastUpdateTime',
    'getManufacturer',
    'getMaxMemory',
    'getPhoneNumber',
    'getProduct',
    'getPreviewSdkInt',
    'getSerialNumber',
    'getSecurityPatch',
    'getBuildId',
    'getTags',
    'getType',
    'getTotalDiskCapacity',
    'getTotalDiskCapacityOld',
    'getTotalMemory',
    'syncUniqueId',
    'getUsedMemory',
    'getUserAgent',
    'isAirplaneMode',
    'isBatteryCharging',
    'isEmulator',
    // 'isKeyboardConnected',
    'isPinOrFingerprintSet',
    'isTablet',
    // 'isTabletMode',
    'isLandscape',
    // 'isMouseConnected',
    // 'hasGms',
    // 'hasHms',//honor9 手机不支持
    'supported32BitAbis',
    'supported64BitAbis',
    'supportedAbis',
    'hasSystemFeature',
    'getSystemAvailableFeatures',
    'isLocationEnabled',
    'isHeadphonesConnected',
    // 'getBrightness',//苹果13 ios 16.5.1 不支持
  ]);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryLevelIsLow, setBatteryLevelIsLow] = useState('');

  const [powerState, setPowerState] = useState(null);
  const [useHookState, setUseHookState] = useState(null);

  const batteryLevel1 = useBatteryLevel();
  const batteryLevelIsLow1 = useBatteryLevelIsLow();

  const powerState1 = objectBooleanToString(usePowerState());
  const power = async () => {
    let res = await getPowerState();
    setPowerInfo(objectBooleanToString(res));
  };
  const AvailableLocationProviders = async () => {
    let res = await getAvailableLocationProviders();
    setLocationProviders(objectBooleanToString(res));
  };

  useEffect(() => {
    const deviceInfoEmitter = new NativeEventEmitter(
      NativeModules.RNDeviceInfo,
    );

    deviceInfoEmitter.addListener(
      'RNDeviceInfo_batteryLevelDidChange',
      level => {
        // 0.759999
        // console.log('level', level);
        setBatteryLevel(level);
      },
    );
    deviceInfoEmitter.addListener('RNDeviceInfo_batteryLevelIsLow', level => {
      // 0.759999
      // console.log('LevelIsLow', level);
      setBatteryLevelIsLow(level);
    });
    deviceInfoEmitter.addListener('RNDeviceInfo_powerStateDidChange', state => {
      // 0.759999
      let data = {};
      if (Platform.OS == 'android') {
        data.batteryState = state;
      }
      console.log('batteryState', data);
      setPowerState(objectBooleanToString(data));
    });
    // 并不支持
    // deviceInfoEmitter.addListener(
    //   'RNDeviceInfo_brightnessDidChange',
    //   brightness => {
    //     // 0.759999
    //     console.log(brightness);
    //     setBrightness(brightness);
    //   },
    // );

    return () => {
      // deviceInfoEmitter();
    };
  }, [info, infoOther]);
  useEffect(() => {
    let data = {...info, ...infoOther};
    setInfoAll(data);
    power();
    AvailableLocationProviders();
    return () => {};
  }, [info, infoOther]);
  useEffect(() => {
    console.log(batteryLevel1, batteryLevelIsLow1);
    let data = {
      listenterbatteryLevel: batteryLevel,
      lisenterbatteryLevelIsLow: batteryLevelIsLow,
      usebatteryLevel: batteryLevel1,
      usebatteryLevelIsLow: batteryLevelIsLow1,
    };
    setUseHookState(data);
    return () => {};
  }, [batteryLevel1, batteryLevelIsLow1, batteryLevel1, batteryLevelIsLow1]);
  useEffect(() => {
    getProp();
    getAndroidId();
    return () => {};
  }, []);

  const getAndroidId = async () => {
    let data = {};
    for (let n of apiName) {
      let a = await DeviceInfo[n]();
      data[n] = typeof a == 'boolean' ? a.toString() : a;
    }
    setDdetail(data);
  };
  const getProp = async () => {
    let infoTemp = {};
    Object.keys(info).forEach(n => {
      Object.assign(infoTemp, {[n]: DeviceInfo[n]().toString()});
    });
    setInfo(infoTemp);
  };
  const TableView = ({headData, rowsData, flexArr}) => {
    return (
      <View>
        <Table borderStyle={styles.tableBorder}>
          <Row
            data={headData}
            style={styles.head}
            flexArr={flexArr}
            textStyle={styles.text}
          />
          <Rows
            data={rowsData}
            flexArr={flexArr}
            style={styles.row}
            textStyle={styles.text}
          />
        </Table>
      </View>
    );
  };

  return (
    <ScrollView style={styles.mainBox}>
      <Text style={styles.textTitle}>useHookState</Text>
      <TableView headData={tableHead} rowsData={_.toPairs(useHookState)} />

      <Text style={styles.textTitle}>listenerPowerState:</Text>
      <TableView headData={tableHead} rowsData={_.toPairs(powerState)} />

      <Text style={styles.textTitle}>usePowerState</Text>
      <TableView headData={tableHead} rowsData={_.toPairs(powerState1)} />

      <Text style={styles.textTitle}>device info</Text>
      <TableView headData={tableHead} rowsData={_.toPairs(infoAll)} />
      <Text style={styles.textTitle}>device details</Text>
      <TableView
        headData={tableHead}
        rowsData={_.toPairs(detail)}
        flexArr={[2, 5]}
      />
      <Text style={styles.textTitle}>powerInfo details</Text>
      <TableView headData={tableHead} rowsData={_.toPairs(powerInfo)} />
      <Text style={styles.textTitle}>locationProviders details</Text>
      <TableView
        headData={tableHead}
        rowsData={_.toPairs(locationProviders)}
        flexArr={[5, 1]}
      />
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
    height: 50,
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
    height: 50,
  },
  text: {
    textAlign: 'left',
    paddingLeft: 20,
  },
  info: {
    textAlign: 'center',
  },
});
export default App;
