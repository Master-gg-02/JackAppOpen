import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
  BackHandler,
  Alert,
} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {router} from '../route';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const {api, components, thirdAuthorions} = router;

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
      buttonStyle={styles.apiButton}
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
const App = ({navigation}) => {
  const [index, setIndex] = React.useState(1);
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  // const [appState, setAppState] = useState(AppState.currentState);

  // useEffect(() => {
  //   AppState.addEventListener('change', _handleAppStateChange);

  //   return () => {
  //     AppState.removeEventListener('change', _handleAppStateChange);
  //   };
  // }, [_handleAppStateChange]);

  // const _handleAppStateChange = nextAppState => {
  //   if (appState.match(/inactive|background/) && nextAppState === 'active') {
  //     console.log('App has come to the foreground!');
  //   }
  //   setAppState(nextAppState);
  // };

  return (
    <SafeAreaView style={styles.mainbox}>
      <ScrollableTabView
        style={styles.scroll}
        initialPage={index}
        tabBarPosition={'bottom'}
        // tabBarBackgroundColor={'grey'}
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        tabBarActiveTextColor={'#ff6700'}
        onChangeTab={val => {
          // console.log(2222222, val);
        }}
        // tabBarInactiveTextColor={'#fff'}
        // renderTabBar={() => <Text>haha</Text>}
      >
        <List tabLabel="API" data={api} navigation={navigation} />
        <List tabLabel="COMPONENTS" data={components} navigation={navigation} />
        <List
          tabLabel="AUTHORIONS"
          data={thirdAuthorions}
          navigation={navigation}
        />
      </ScrollableTabView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainbox: {
    flex: 1,
  },
  scroll: {
    paddingTop: 10,
  },
  list: {
    paddingHorizontal: 15,
    width: '100%',
  },
  apiButton: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 5,
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#ff6700',
  },
});
export default App;
