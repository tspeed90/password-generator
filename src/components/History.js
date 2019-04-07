import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, List } from 'react-native-paper';
import firebase from 'react-native-firebase';

const database = firebase.database();

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null
    };
  }

  componentDidMount() {
    database.ref('sites').on('value', snapshot => {
      if (snapshot.val()) {
        this.setState({ history: Object.values(snapshot.val()) });
      }
    });
  }
  render() {
    const { history } = this.state;
    return (
      <View>
        <Card style={{ borderRadius: 0 }}>
          <Card.Content>
            <Card.Title title="History" style={{ paddingLeft: 0 }} />
            <List.Section>
              {history &&
                history.map(site => (
                  <List.Item
                    title={site}
                    onPress={() => {
                      this.props.savePassword(site);
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
