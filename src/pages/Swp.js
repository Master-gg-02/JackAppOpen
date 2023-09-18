import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const RightActions = () => {
  return <Text>删除</Text>;
};

const App = () => {
  return (
    <ScrollView>
      <Swipeable containerStyle={{flex: 1}} renderRightActions={RightActions}>
        <View style={{height: 50, backgroundColor: 'green'}} />
      </Swipeable>
    </ScrollView>
  );
};

export default App;
