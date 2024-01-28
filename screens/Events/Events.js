import {EventCard} from "../../components/EventCard";
import {FlatList, StyleSheet, TextInput, View, Button as ReactButton, TouchableOpacity} from "react-native";
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
                <TouchableOpacity>
                    <View style={styles.searchTag}>
                        <Text category={"c1"} style={{color: "white"}}>un tag</Text>
                        <Icon fill={"white"} style={styles.tagIcon} name={"close-outline"}></Icon>
                    </View>
                </TouchableOpacity>
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 6,
        justifyContent: "space-between",
        alignSelf: "flex-start",
        backgroundColor: "orange",
        borderRadius: 9,
        paddingVertical: 3,
        paddingHorizontal: 7,
        verticalAlign: "middle"
    },
    tagIcon: {
        width: 15,
        height: 15,
        marginTop: 3
    }
})