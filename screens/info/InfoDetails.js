import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import ServicesCardDetail from '../../components/ServicesCardDetail';

const InfoDetails = ({ route }) => {
  const { type } = route.params;
    return (
        <Layout style={styles.container}>
            <Text style={styles.title}>{type}</Text>
        </Layout>
    )

};

export default InfoDetails;