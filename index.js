/**
 * @format
 */

import {AppRegistry} from 'react-native';
// 增加dev分支
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
