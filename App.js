/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, Keyboard, Clipboard } from 'react-native';
import { Appbar, Snackbar } from 'react-native-paper';

import NewDomain from './src/components/NewDomain';
import History from './src/components/History';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      domain: null
    };
  }

  alertDomain = domain => {
    Keyboard.dismiss();
    this.setState(state => ({ visible: !state.visible, domain: domain }));
    Clipboard.setString(domain);
  };

  render() {
    const { domain } = this.state;
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
          Password saved to clipboard
        </Snackbar>
      </View>
    );
  }
}
