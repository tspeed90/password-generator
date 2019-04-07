import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import firebase from 'react-native-firebase';

const database = firebase.database();

export default class NewDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: null,
      masterPassword: null
    };
  }

  render() {
    return (
      <View>
        <Card style={{ borderRadius: 0 }}>
          <Card.Content>
            <Card.Title
              title="Generate New Password"
              style={{ paddingLeft: 0 }}
            />
            <Text>Enter your master password.</Text>
            <TextInput
              value={this.state.masterPassword}
              onChangeText={masterPassword => {
                this.setState({ masterPassword });
                this.props.updateState(masterPassword);
              }}
              name="password"
              mode="flat"
              label="Master password"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
            />
            <Text>Enter the website domain.</Text>
            <TextInput
              value={this.state.domain}
              onChangeText={domain => {
                this.setState({ domain });
              }}
              name="domain"
              mode="flat"
              label="Website domain"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Button
              mode="contained"
              onPress={() => {
                database.ref('sites').push(this.state.domain);
                this.props.savePassword(this.state.domain);
                this.setState({ masterPassword: '', domain: '' });
              }}
            >
              Get New Password
            </Button>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
