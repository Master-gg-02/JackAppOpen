import React, {useState} from 'react';
import {Button, Overlay, Icon} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

// type OverlayProps = {};

// const OverlayComponent: React.FunctionComponent<OverlayProps> = ({
//   navigation,
// }) => {
const OverlayComponent = navigation => {
  const [visible, setVisible] = useState(false);
  // haha
  const toggleOverlay = () => {
    setVisible(true);
  };
  const toggleOverlay2 = () => {
    setVisible(false);
    // navigation.navigate('Home');
  };

  return (
    <View>
      <Button
        title="Open Overlay"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay2}
        PressableProps="onLongPress">
        <Text style={styles.textPrimary}>Hello!</Text>
        <Text style={styles.textSecondary}>
          Welcome to React Native Elements
        </Text>
        <Button
          icon={
            <Icon
              name="wrench"
              type="font-awesome"
              color="white"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          title="Start Building"
          onPress={toggleOverlay2}
        />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default OverlayComponent;
