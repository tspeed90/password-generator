import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';

export default class NewDomain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: null
    };
  }

  alertDomain = () => {
    alert(this.state.domain);
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Title
            title="Generate New Password"
            style={{ paddingLeft: 0 }}
          />
          <Text>Enter the website domain to generate a password.</Text>
          <TextInput
            value={this.state.domain}
            onChangeText={domain => this.setState({ domain })}
            name="domain"
            mode="flat"
            label="Website domain"
          />
          <Button mode="contained" onPress={this.alertDomain}>
            Generate
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
