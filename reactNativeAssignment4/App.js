
import React, {Component} from 'react';
import { View } from 'react-native';
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="dashboard" component={Dashboard} title="Dashboard" />
    </Stack>
  </Router>
);
export default App;