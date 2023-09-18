/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';

const App = () => {
  const [photos, setPhotos] = useState([]);
  async function hasAndroidPermission() {
    const newLocal = 'permission=>>>>>>>>';
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    console.log(newLocal);
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePicture() {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    // CameraRoll.save('tupian', { type:'photo', album:'jacky' })
    CameraRoll.getAlbums({assetType: 'All'});
  }
  savePicture();
  const handleButtonPress = async () => {
    debugger;
    try {
      let res = await CameraRoll.getPhotos({
        first: 100,
        assetType: 'Photos',
      });
      let arr = JSON.parse(JSON.stringify(res.edges));
      debugger;
      setPhotos([...arr]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Load Images" onPress={handleButtonPress} />
      <ScrollView contentContainerStyle={styles.pictureBox}>
        {photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 115,
                height: 120,
              }}
              source={{uri: p.node.image.uri}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureBox: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default App;
