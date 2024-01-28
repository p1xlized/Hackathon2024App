import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline' />
);

const EventsIcon = (props) => (
  <Icon {...props} name='calendar-outline' />
);

const ServicesIcon = (props) => (
  <Icon {...props} name='map-outline' />
);

const ProfileIcon = (props) => (
  <Icon {...props} name='person' />
);
const AddIcon = (props) => (
  <Icon {...props} name='person' />
);

export const TabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    const routeName = state.routeNames[index];
    navigation.navigate(routeName);
  };

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={onSelect}
    >
      <BottomNavigationTab title='Accueil' icon={HomeIcon} />
      <BottomNavigationTab title='Évènements' icon={EventsIcon} />
      <BottomNavigationTab title='Services' icon={ServicesIcon} />
      <BottomNavigationTab title='Profil' icon={ProfileIcon} />
      <BottomNavigationTab title='Add' icon={AddIcon} />
    </BottomNavigation>
  );
};
