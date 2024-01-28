import React from 'react';
import { Card, Text, Avatar, Layout } from '@ui-kitten/components';
import { TouchableOpacity, Linking } from 'react-native';

const Authors = (props) => {
  const { name, githubUsername, avatar } = props;

  const handlePress = () => {
    const githubLink = `https://github.com/${githubUsername}`;
    Linking.openURL(githubLink);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar source={avatar} />
        <Text style={{ marginLeft: 30 }}>{name}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default Authors;
