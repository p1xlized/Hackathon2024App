import React from "react";
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={handleGoBack} />
  );

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } 
  };

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        title="CityLife"
        subtitle={route.name}
        accessoryLeft={renderBackAction}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    minHeight: 10,
  },
});
