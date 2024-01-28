import React from 'react';
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Reminder from './Reminder';

const BackIcon = (props) => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

const MenuIcon = (props) => (
  <Icon
    {...props}
    name='bell-outline'
  />
);


const EditIcon = (props) => (
  <Icon
    {...props}
    name='plus-circle-outline'
  />
);


export const Header = () => {
  const route = useRoute();

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={toggleMenu}
    />
  );

  
  const renderRightActions = () => (
    <>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
        style={styles.overflowMenu}
      >
        <Reminder />
      </OverflowMenu>
        <TopNavigationAction icon={EditIcon} />
    </>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} />
  );

  return (
    <Layout
      style={styles.container}
      level='1'
    >
      <TopNavigation
        alignment='center'
        title='CityLife'
        subtitle={route.name}  // Set the subtitle based on the current route name
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
    marginTop: 20,
    padding:5,
    width: '100%',
    height: 400,
    alignSelf: 'center',
  },
});
