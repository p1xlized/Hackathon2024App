import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useState} from "react";
import ServicesCard from "../../components/ServicesCard";

function info() {
    const [counter, setCounter] = useState(0);

    return (
      <Layout
        style={styles.container}
        level='1'
      >
        <ServicesCard />
      </Layout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginHorizontal: 8,
    },
  });
export default info;