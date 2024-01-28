import React from "react";
import { Card, Text, Divider, Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const ServicesCard = (props) => {
  const { name, open, close, description } = props.data;
  const { handlePress } = props;

  return (
    <Card>
      <Text category="h4">{name}</Text>
      <Divider style={{ marginBottom: 10 }} />
      <View styles={{ marginBottom: 10 }}>
        <Text category="h8">{description}</Text>
        <Text category="s1">Open: {open}</Text>
        <Text category="s1">Close: {close}</Text>
      </View>
      <Divider style={{ marginBottom: 20, backgroundColor: "#fff" }} />
      <View styles={styles.button}>
        <Button onPress={handlePress()}>En Savoir Plus</Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default ServicesCard;
