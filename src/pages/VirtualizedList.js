import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
// import Constants from 'expo-constants';
import {router} from '../route';

const {components} = router;

const getItem = (data, index) => {
  let name = data[index].name;
  return {
    id: Math.random()
      .toString(12)
      .substring(0),
    title: name,
  };
};
const getItemCount = data => {
  return data.length;
};
const Item = ({title, navigation, startColor, endColor, textcColor}) => {
  return (
    <Button
      color={textcColor}
      title={title}
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: [startColor, endColor],

        start: {x: 0, y: 0},
        end: {x: 1, y: 0},
      }}
      buttonStyle={styles.item}
      onPress={() => {
        console.log(title);
        navigation.navigate(title);
      }}
    />
  );
};
const List = ({data, navigation}) => {
  return (
    <VirtualizedList
      style={styles.list}
      data={data.data}
      initialNumToRender={20}
      renderItem={({item}) => (
        <Item
          navigation={navigation}
          title={item.title}
          textcColor={data.textcColor}
          endColor={data.endColor}
          startColor={data.startColor}
        />
      )}
      keyExtractor={item => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};
const VirtualizedListExample = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <List data={components} navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
  },
});
export default VirtualizedListExample;
