import React from 'react';
import {  Avatar, Layout } from '@ui-kitten/components';
import { Text} from'react-native';
import { TouchableOpacity, Linking } from 'react-native';

const Authors = (props) => {
  const { name, githubUsername, avatar } = props;

  const handlePress = () => {
    const githubLink = `https://github.com/${githubUsername}`;
    Linking.openURL(githubLink);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Layout style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Avatar source={avatar} size="giant" />
        <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default Authors;
