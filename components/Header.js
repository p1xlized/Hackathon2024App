import React, { useState } from "react";
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Modal,
  Text,
  Button,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Autors from "./Autors";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const MenuIcon = (props) => <Icon {...props} name="menu-2-outline" />;
const CloseIcon = (props) => <Icon {...props} name="close-outline" />;

export const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [visible, setVisible] = useState(false);

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={handleGoBack} />
  );

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const renderRightActions = () => (
    <>
      <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    </>
  );

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        title="CityLife"
        subtitle={route.name}
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={toggleMenu}
        style={styles.overflowMenu}
      >
        <View style={styles.modalContainer}>
          <View style={styles.closeButtonContainer}>
            <Text style={styles.Text}>Auteurs: </Text>
            <Button
              style={styles.closeButton}
              onPress={toggleMenu}
              status="basic"
              accessoryLeft={CloseIcon}
            />
          </View>
          <View style={styles.AutorsContainer}>
            <Autors name="Alexandru Paduret" githubUsername="p1xlized" avatar={require('../assets/icon.jpeg')}/>
            <Autors name="Nathan Decopain" githubUsername="NathanDecopain" avatar={require('../assets/icon2.png')}/>
            <Autors name="Adrien Dolci" githubUsername="Skamandrius" avatar={require('../assets/icon3.png')}/>
            <Autors name="Samy" githubUsername="samyiss" avatar={require('../assets/icon4.png')}/>
          </View>
        </View>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    minHeight: 10,
  },
  overflowMenu: {
    width: "100%",
    height: "100%",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "flex-start",
  },
  closeButton: {
    width: 20,
    height: 20,
  },
  Text: {
    margin: 12,
    fontWeight: "bold",
    fontSize: 16,
  },
  notifications: {
    marginHorizontal: 10,
  },
  AutorsContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    // Add spacing between cards
    marginBottom: 10,
  },
});
