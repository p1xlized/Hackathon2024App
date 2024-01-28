<<<<<<< Updated upstream
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
=======
import React from 'react';
import { Card, Avatar, Layout } from '@ui-kitten/components';
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
>>>>>>> Stashed changes
