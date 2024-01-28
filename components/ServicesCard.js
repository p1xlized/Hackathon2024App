import React from 'react';
import { Card, Text,Divider } from '@ui-kitten/components';

const ServicesCard = (props) => {
  const { name, address, open, close, description, type } = props.data;

  return (
    <Card>
      <Text category="h6">{name}</Text>
      <Divider />
      <Text category="s1">Type: {type}</Text>
      <Text category="s1">Address: {address}</Text>
      <Text category="s1">Open: {open}</Text>
      <Text category="s1">Close: {close}</Text>
      <Text category="s1">Description: {description}</Text>
    </Card>
  );
};

export default ServicesCard;
