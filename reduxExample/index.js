/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CounterApp from './src/CounterApp';
import CounterComponent from './APP/Components/CounterComponent';

AppRegistry.registerComponent("CounterApp", () => App);
