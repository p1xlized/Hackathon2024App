import {EventCard} from "../../components/EventCard";
import {FlatList, StyleSheet, TextInput, View, Button as ReactButton, TouchableOpacity} from "react-native";
import {Button, Card, Icon, Layout, Modal, Text} from "@ui-kitten/components";
import {useEffect, useState} from "react";
import supabase from "../../lib/supabase";

export function Events({navigation}) {
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const {data, error} = await supabase
                    .from("events")
                    .select("*")

                setEvents(await data)
            } catch (error) {
                console.error(error);
                setError(error);
            }
        }
        fetchEvents()
    }, [])

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
                <TouchableOpacity>
                    <View style={styles.searchTag}>
                        <Text category={"c1"} style={{color: "white"}}>un tag</Text>
                        <Icon fill={"white"} style={styles.tagIcon} name={"close-outline"}></Icon>
                    </View>
                </TouchableOpacity>
            </Layout>
            { events &&
                <View style={styles.eventsList}>
                    <Text category={"h4"} style={styles.sectionDate}>27 janvier 2023</Text>
                    <FlatList style={styles.topContainer}
                              data={events}
                              keyExtractor={(item, index) => item.id.toString() }
                              renderItem={({item, index}) => <EventCard eventName={item.name} locationName={item.location}></EventCard>}
                              ItemSeparatorComponent={() => <View style={{height: 5}}/>}
                    />
                </View>
            }

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
        paddingVertical: 10,
        alignItems: "flex-start",
        flexDirection: "row",
        columnGap: 3
    },
    searchTag: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 7,
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
        marginTop: 1,
        borderRadius: 4,
        backgroundColor: "gray"
    },
    eventsList: {
        margin: 4
    },
    sectionDate: {
        marginLeft: 2
    }
})