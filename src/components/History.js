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
                title="amazon.com"
                onPress={() => {
                  this.props.alert('amazon.com');
                }}
              />
              <List.Item
                title="instagram.com"
                onPress={() => {
                  this.props.alert('instagram.com');
                }}
              />
            </List.Section>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
