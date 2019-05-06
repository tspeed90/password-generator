import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, List } from 'react-native-paper';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <View>
        <Card style={{ borderRadius: 0 }}>
          <Card.Content>
            <Card.Title title="History" style={{ paddingLeft: 0 }} />
            <List.Section>
              {history &&
                history.map(site => (
                  <List.Item
                    title={site.domain}
                    onPress={() => {
                      this.props.savePassword(site.domain);
                    }}
                  />
                ))}
            </List.Section>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
