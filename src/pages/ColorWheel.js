/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import {Button} from 'react-native-elements';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';

// import {ColorWheel} from 'react-native-color-wheel';
// import ColorPicker from 'react-native-wheel-color-picker';
import {ColorPicker} from 'react-native-color-picker';
const App = () => {
  const colorRef = useRef();
  const [color, setColor] = useState('#ff6700');

  const onColorChange = color => {
    setColor(color);
    console.log(color);
  };
  const onColorChangeComplete = color => {
    console.log(color);
  };
  const onChange = () => {
    console.log(22222222);
  };

  return (
    <View style={styles.container}>
      {/* <ColorWheel
        initialColor="#ee0000"
        onColorChange={color => console.log({color})}
        onColorChangeComplete={color => onChange(color)}
        style={{width: 180, height: 180}}
        thumbStyle={{height: 30, width: 30, borderRadius: 30}}
      /> */}
      {/* <ColorWheel
        initialColor="#00ee00"
        style={{marginLeft: 20, padding: 40, height: 200, width: 200}}
      /> */}
      {/* <ColorPicker
        ref={colorRef}
        style={{width: 300, height: 500}}
        color={color}
        swatchesOnly={false}
        thumbSize={50}
        shadeWheelThumb={false}
        shadeSliderThumb={true}
        noSnap={true}
        row={false}
        swatchesLast={true}
        swatches={true}
        discrete={false}
        // sliderSize={40}
        gapSize={0}
        // palette={[
        //   '#000000',
        //   '#888888',
        //   '#ed1c24',
        //   '#d11cd5',
        //   '#1633e6',
        //   '#00aeef',
        //   '#00c85d',
        //   '#57ff0a',
        //   '#ffde17',
        //   '#ff6700',
        // ]}
        onColorChange={onColorChange}
        onColorChangeComplete={onColorChangeComplete}
      /> */}
      <ColorPicker
        // color={color}
        defaultColor={color}
        // oldColor={color}
        onColorSelected={color => {
          setColor(color);
        }}
        onColorChange={() => {
          setColor(color);
        }}
        style={{width: '100%', height: 500}}
        // hideSliders
        // hideControls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // pictureBox: {
  //   padding: 15,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-start',
  // },
});

export default App;
