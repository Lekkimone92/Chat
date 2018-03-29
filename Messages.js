import React from 'react';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  query allMessages {
    allMessages {
      text
    }
  }
`;

const ListMessage = () => (
  <Query query={QUERY}>
    {({ data, error, loading }) => {
      if (error) return (<Text>'💩 Oops!'</Text>)
      if (loading) return (<Text>'Patientez chargement...'</Text>)
      if(!data){
        return (<Text>'Pas de donnees.....'</Text>)
      }else {
        return (
          <View>
            <List>
              {
                data.allMessages.map((message, i) => (
                  <ListItem
                    key={i}
                    title={message.text}
                  />
                ))
              }
            </List>
          </View>
        )
      }

    }}
  </Query>
);

export default class Messages extends React.Component {
  render(){
    return (
      <ListMessage />
    )
  }
}
