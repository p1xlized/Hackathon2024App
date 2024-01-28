import {EventCard} from "../../components/EventCard";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import {Button, Card, Icon, Layout, Modal, Text} from "@ui-kitten/components";
import {useState} from "react";

export function Events({navigation}) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <View style={styles.searchBar}>
                <TextInput placeholder={"Rechercher une activité"}></TextInput>
                <Button
                    onPress={() => setModalVisible(true)}
                    style={styles.searchBarIcon}
                    appearance='ghost'
                    status='basic'
                    accessoryLeft={<Icon name={"options-2-outline"}
                    />}
                />
            </View>
            <Layout level={"2"} style={styles.searchFiltersContainer}>
                <Text><Button style={styles.searchTag}>Some text</Button>
                </Text>
            </Layout>

            <FlatList style={styles.topContainer}
                      data={[1, 2, 3]}
                      renderItem={(item) => <EventCard></EventCard>}
                      ItemSeparatorComponent={() => <View style={{height: 5}}/>}
            />

            <Modal visible={modalVisible} backdropStyle={styles.backdrop}
                   onBackdropPress={() => setModalVisible(false)}>
                <Card style={styles.searchFiltersModal}>
                    <FlatList data={[1, 2, 3, 4]} renderItem={() => <Text>Some Filter: Kids</Text>}/>
                </Card>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        margin: 5,
        rowGap: 5
    },
    searchBar: {
        display: "flex",
        flexDirection: "row",
        height: 50,
        justifyContent: "space-between",
        paddingLeft: 20,
        backgroundColor: "white"
    },
    searchBarIcon: {},
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 20
    },
    searchFiltersModal: {
        width: "100%",
    },
    searchFiltersContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    searchTag: {
        fontWeight: "normal"
    }
})