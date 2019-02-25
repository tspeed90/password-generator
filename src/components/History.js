import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, List } from 'react-native-paper';

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card style={{ borderRadius: 0 }}>
          <Card.Content>
            <Card.Title title="History" style={{ paddingLeft: 0 }} />
            <List.Section>
              <List.Item title="amazon.com" onPress={this.props.alert} />
              <List.Item title="instagram.com" onPress={this.props.alert} />
            </List.Section>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
