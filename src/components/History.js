import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, List } from 'react-native-paper';

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
              <List.Item
                title="amazon.co.uk"
                onPress={() => {
                  this.props.savePassword('amazon.co.uk');
                }}
              />
              <List.Item
                title="instagram.com"
                onPress={() => {
                  this.props.savePassword('instagram.com');
                }}
              />
            </List.Section>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
