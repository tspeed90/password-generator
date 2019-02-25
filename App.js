/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Dimensions
} from 'react-native';
import { Appbar, Snackbar } from 'react-native-paper';

import NewDomain from './src/components/NewDomain';
import History from './src/components/History';

var height = Dimensions.get('window').height;
console.log(height);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  alertDomain = () => {
    Keyboard.dismiss();
    this.setState(state => ({ visible: !state.visible }));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Appbar>
            <Appbar.Content title="Password Generator" />
          </Appbar>
          <NewDomain alert={this.alertDomain} />
          <History alert={this.alertDomain} />
        </View>
        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          duration={1000}
        >
          Password saved to clipboard!
        </Snackbar>
      </View>
    );
  }
}
