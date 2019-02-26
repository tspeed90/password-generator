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

  render() {
    return (
      <View>
        <Card style={{ borderRadius: 0 }}>
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
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Button
              mode="contained"
              onPress={() => {
                this.props.alert(this.state.domain);
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
