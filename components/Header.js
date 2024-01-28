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
import Authors from "./Autors";
import { useNavigation, useRoute } from "@react-navigation/native";

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
            <Text style={styles.Text}></Text>
            <Button
              style={styles.closeButton}
              onPress={toggleMenu}
              status="basic"
              accessoryLeft={CloseIcon}
            />
          </View>
          <View style={styles.AutorsContainer}>
            <Authors name="Alexandru Paduret" githubUsername="alexpadur" avatar={require('../assets/icon.jpeg')} />
            <Authors name="Nathan Decopain" githubUsername="nathandeco" avatar={require('../assets/icon2.png')} />
            <Authors name="Adrien Dolci" githubUsername="adriendolci" avatar={require('../assets/icon3.png')} />
            <Authors name="Samy" githubUsername="samymhajeb" avatar={require('../assets/icon4.png')} />
          </View>
          <Text style={styles.madeByText}>Made by Team NASA</Text>
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
    justifyContent: "space-between",
    padding: 10,
  },
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  AutorsContainer: {
    flex: 1, // Make it flexible to occupy available space
    marginTop: 10,
    marginHorizontal: 10,
  },
  madeByText: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 30,
  },
});

export default Header;
