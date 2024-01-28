import React from "react";
import { Icon, Layout, TopNavigation, TopNavigationAction, Button, Text, Modal, View } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Reminder from "./Reminder";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;
const MenuIcon = (props) => <Icon {...props} name="bell-outline" />;
const CloseIcon = (props) => <Icon {...props} name="close-circle" />;

export const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [visible, setVisible] = React.useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <>
      <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={toggleMenu}
        style={styles.overflowMenu}
      >
        <View style={styles.closeButtonContainer}>
          <Text style={styles.Text}>Rappels</Text>
          <Button
            style={styles.closeButton}
            title="Close"
            onPress={toggleMenu}
            status="basic"
            accessoryLeft={CloseIcon}
          />
        </View>
        <Reminder style={styles.notifications} />
      </Modal>
    </>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
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
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    minHeight: 10,
  },
  overflowMenu: {
    padding: 5,
    width: "100%",
    height: 400,
    alignSelf: "flex-end",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
  },
  notifications: {
    marginHorizontal: 10,
  },
});

export default Header;
