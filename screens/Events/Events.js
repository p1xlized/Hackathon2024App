import {EventCard} from "../../components/events/EventCard";
import {FlatList, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Button, Card, Icon, Layout, Modal, Text} from "@ui-kitten/components";
import {useEffect, useState} from "react";
import supabase from "../../lib/supabase";

export function Events({navigation}) {
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [tagList, setTagList] = useState([])
    const [query, setQuery] = useState("")
    const [filteredTagList, setFilteredTagList] = useState([])
    const [tagFilters, setTagFilters] = useState([])

    useEffect(() => {
        // Function to fetch events with associated tags
        async function getEventsWithTags() {
            try {
                // Fetch all events along with their associated tag_ids from the events_tags table
                const {data: eventsTagsData, error: eventsTagsError} = await supabase
                    .from('events_tags')
                    .select('event_id, tag_id');

                if (eventsTagsError) {
                    throw eventsTagsError;
                }

                // Organize the data into a map where the key is the event_id
                const eventsMap = eventsTagsData.reduce((acc, row) => {
                    const eventId = row.event_id;
                    const tagId = row.tag_id;

                    if (!acc[eventId]) {
                        acc[eventId] = {event_id: eventId, name: '', starts_on: '', location: '', tags: []};
                    }

                    acc[eventId].tags.push(tagId);

                    return acc;
                }, {});

                // Fetch tag names using the tag_ids from the map
                const tagNamesData = await supabase
                    .from('tags')
                    .select('id, name')
                    .in('id', Object.values(eventsMap).flatMap(event => event.tags));

                // Organize tag names into a map for easier lookup
                const tagNamesMap = tagNamesData.data.reduce((acc, tag) => {
                    acc[tag.id] = tag.name;
                    return acc;
                }, {});

                // Fetch event details using the event_ids from the map
                const eventsDetails = await Promise.all(
                    Object.keys(eventsMap).map(async (eventId) => {
                        const {data: eventData, error: eventError} = await supabase
                            .from('events')
                            .select('id, name, starts_on, ends_on, location')
                            .eq('id', eventId)
                            .single();

                        if (eventError) {
                            throw eventError;
                        }

                        return eventData;
                    })
                );

                // Combine event details with tags
                const result = eventsDetails.map((eventData) => {
                    const eventId = eventData.id;
                    return {
                        id: eventId,
                        name: eventData.name,
                        starts_on: eventData.starts_on,
                        ends_on: eventData.ends_on,
                        location: eventData.location,
                        tags: eventsMap[eventId].tags.map(tagId => ({id: tagId, name: tagNamesMap[tagId]})),
                    };
                });

                const sortedResult = result.sort((a, b) => b.starts_on - a.starts_on)
                setEvents(sortedResult)
                setFilteredEvents(sortedResult)

                console.log(result);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }

// Call the function to get events with associated tags
        getEventsWithTags();
    }, [])

    useEffect(() => {
            async function getAllEventTags() {
                const {data, error} = await supabase.from("tags").select()

                if (error) {
                    console.error(error)
                    setError(error)
                    return
                }

                console.log(data)
                setTagList(data)
                setFilteredTagList(data)
            }

            getAllEventTags()
        }
        , [])

    useEffect(() => {
        async function filterTags() {
            if (!query) {
                setFilteredTagList([])
                return
            }

            const filteredList = tagList.filter(tag => tag.name.includes(query))
            console.log(`recherche: ${query}; \n    Résultat : ${filteredList}`)
            setFilteredTagList(filteredList)
        }

        filterTags()
    }, [query]);

    useEffect(() => {
        console.log(tagFilters)

        async function filterEvents() {
            if (tagFilters.length < 1) {
                setFilteredEvents(events)
                return
            }
            const newFilteredEvents = events.filter((eventItem) =>
                eventItem.tags.some((tag) => tagFilters.some((tagFilter) => tagFilter.id === tag.id))
            );
            console.log(newFilteredEvents)
            setFilteredEvents(newFilteredEvents)
        }

        filterEvents()
    }, [tagFilters])

    return (
        <View>
            <View style={styles.searchBar}>
                <TextInput onChangeText={(text) => setQuery(text)} placeholder={"Rechercher une activité"}></TextInput>
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
                {filteredTagList && query.length > 0 && filteredTagList.map((tag) => {
                    if (tagFilters.map((tag) => tag.id).includes(tag.id)) {
                        return null
                    } else {
                        return <TouchableOpacity
                            onPress={() => setTagFilters((prevState => [...prevState, tag]))}
                            key={tag.id}>
                            <View style={styles.searchTag}>
                                <Text category={"c1"} style={{color: "white"}}>{tag.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                })}

                {tagFilters && tagFilters.map((tag) =>
                    <TouchableOpacity
                        onPress={() => setTagFilters((prevState) => prevState.filter((item) => item.id !== tag.id))}
                        key={tag.id}>

                        <View style={styles.searchTag}>
                            <Text category={"c1"} style={{color: "white"}}>{tag.name}</Text>
                            <Icon fill={"white"} style={styles.tagIcon} name={"close-outline"}></Icon>
                        </View>

                    </TouchableOpacity>
                )}
            </Layout>
            <View>
                {filteredEvents.length > 0 &&
                    <FlatList style={styles.eventsList}
                              data={filteredEvents}
                              keyExtractor={(item) => item.id}
                              renderItem={({item, index}) =>
                              {
                                  console.log(`Rendering item ${index} with id ${item.id}`);
                                  return <EventCard key={item.id} eventName={item.name}
                                                                        locationName={item.location}
                                                                        startsOn={item.starts_on}
                                                                        endsOn={item.ends_on}
                                                                        tags={item.tags}/>}
                              }
                              ItemSeparatorComponent={() => <View style={{height: 7}}/>}
                    />
                }
            </View>

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
    searchTagSuggestion: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 7,
        justifyContent: "space-between",
        alignSelf: "flex-start",
        backgroundColor: "lightblue",
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
        height: 1000,
        margin: 4
    },
    sectionDate: {
        marginLeft: 2
    }
})