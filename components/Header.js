import React from "react";
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  Button,
  Text,
} from "@ui-kitten/components";
import { StyleSheet, Modal, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Reminder from "./Reminder";
import {useRoute} from "@react-navigation/native";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const MenuIcon = (props) => <Icon {...props} name="bell-outline" />;

const EditIcon = (props) => <Icon {...props} name="plus-circle-outline" />;

const CloseIcon = (props) => <Icon {...props} name="close-circle" />;

export const Header = () => {
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
        <Reminder style={styles.notifications}/>
      </Modal>
      <TopNavigationAction icon={EditIcon} />
    </>
  );

  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        title="CityLife"
        subtitle={route.name} // Set the subtitle based on the current route name
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};
// ...

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
    modalContainer: {
      flex: 1,
      justifyContent: "space-between",
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
    Text:{
        margin: 12,
    },
    notifications: {
        marginHorizontal: 10,
    }
  });
  
  
