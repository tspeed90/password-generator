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
import firebase from 'react-native-firebase';

import NewDomain from './src/components/NewDomain';
import History from './src/components/History';
import generatePassword from './src/utils/generatePassword';

const database = firebase.database();

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      domain: null,
      history: null
    };
  }

  componentDidMount() {
    database.ref('sites').on('value', snapshot => {
      if (snapshot.val()) {
        this.setState({ history: Object.values(snapshot.val()) });
      } else {
        this.setState({ history: [] });
      }
    });
  }

  // TODO: History is currently working improperly by using a false master password. Will need to pass the input from
  // NewDomain to
  savePasswordToClipboard = domain => {
    Keyboard.dismiss();
    this.setState(state => ({ visible: !state.visible }));
    Clipboard.setString(generatePassword(this.state.masterPassword, domain));
  };

  updatePasswordInState = password => {
    this.setState(state => ({ masterPassword: password }));
  };

  render() {
    const { history } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Appbar>
            <Appbar.Content title="Password Generator" />
          </Appbar>
          <NewDomain
            savePassword={this.savePasswordToClipboard}
            updateState={this.updatePasswordInState}
            history={history}
          />
          <History
            history={history}
            savePassword={this.savePasswordToClipboard}
          />
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
