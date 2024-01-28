import React from "react";
import { Card, Text, Divider, Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const ServicesCard = (props) => {
  const { id, name, open, close, address,description } = props.data;
  const { handlePress } = props;

  return (
    <Card>
      <Text category="h4">{name}</Text>
      <Divider style={{ marginBottom: 10 }} />
      <View style={{ marginBottom: 10 }}>
        <Text category="h8">{description}</Text>
        <Text category="s1">Open: {open}</Text>
        <Text category="s1">Close: {close}</Text>
        <Text category="s1">{address}</Text>

      </View>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default ServicesCard;
