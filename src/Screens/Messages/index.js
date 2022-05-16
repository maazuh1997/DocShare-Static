import React, { Component } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    face1,
    face2,
    face3,
    face4,
    face5,
    notification_white,
    plus_icon,
    search,
    message_white,
} from '../../Assets';
import { Header } from '../../Components';
import PostCard from '../../Components/Home/PostCard';
import { Colors } from '../../Styles';



export default class Messages extends Component {
    render() {
        const navigation = this.props.navigation;
        const chatMessages = ({ item }) => {
            return (
                <TouchableOpacity
                    style={styles.chat_Component}
                    onPress={() => navigation.navigate('Chat')}
                >
                    <View style={styles.profile_view}>
                        <Image style={styles.profile_Img} source={face1} />
                    </View>
                    <View style={styles.chat_view}>
                        <Text style={styles.chat_name}>Jacob</Text>
                        <Text style={styles.chat_message}>Thank you for sharing</Text>
                    </View>
                    <View style={styles.date_view}>
                        <Text style={styles.chat_date}>3:30 pm</Text>
                        <View style={styles.message_count}>
                            <Text style={styles.message_countText}>2</Text>
                        </View>
                    </View>
                </TouchableOpacity>


            );
        };
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftIcon={search}
                    rightIcon={message_white}
                    headerText={'Messages'}
                />
                <View style={styles.homeWrapper}>
                    <ScrollView style={{ flex: 1 }}>
                        {/* <FlatList
                            data={[1, 1, 1, 1]}
                            renderItem={chatMessages}
                            keyExtractor={item => item.id}
                        /> */}

                        {/* Single Chat */}
                        <TouchableOpacity
                            style={styles.chat_Component}
                            onPress={() => navigation.navigate('Chat', {type: 'single',})}
                        >
                            <View style={styles.profile_view}>
                                <Image style={styles.profile_Img} source={face1} />
                            </View>
                            <View style={styles.chat_view}>
                                <Text style={styles.chat_name}>Jacob</Text>
                                <Text style={styles.chat_message}>Thank you for sharing</Text>
                            </View>
                            <View style={styles.date_view}>
                                <Text style={styles.chat_date}>3:30 pm</Text>
                                <View style={styles.message_count}>
                                    <Text style={styles.message_countText}>2</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* Single Chat */}

                        {/* Group Chat of 5 */}
                        <TouchableOpacity
                            style={styles.chat_Component}
                            onPress={() => navigation.navigate('Chat', {type: 'group',})}
                        >
                            <View style={styles.profile_view}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image style={styles.group_profile_Img} source={face1} />
                                    <Image style={styles.group_profile_Img} source={face2} />
                                    <Image style={styles.group_profile_Img} source={face3} />
                                </View>
                                <View style={{ flexDirection: 'row', marginVertical: -5, justifyContent: 'center' }}>
                                    <Image style={styles.group_profile_Img} source={face4} />
                                    <Image style={styles.group_profile_Img} source={face5} />
                                </View>
                            </View>
                            <View style={styles.chat_view}>
                                <Text style={styles.chat_name}>Doc Share Group</Text>
                                <Text style={styles.chat_message}>Adam,Sam,Harry,John & Wick</Text>
                            </View>
                            <View style={styles.date_view}>
                                <Text style={styles.chat_date}>3:30 pm</Text>
                                <View style={styles.message_count}>
                                    <Text style={styles.message_countText}>12</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* Group Chat of 5 */}

                        {/* Group Chat of 3 */}
                        <TouchableOpacity
                            style={styles.chat_Component}
                            onPress={() => navigation.navigate('Chat', {type: 'group',})}
                        >
                            <View style={styles.profile_view}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={styles.group_profile_Img} source={face1} />
                                    {/* <Image style={styles.group_profile_Img} source={face2} />
                                    <Image style={styles.group_profile_Img} source={face3} /> */}
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={styles.group_profile_Img} source={face4} />
                                    <Image style={styles.group_profile_Img} source={face5} />
                                </View>
                            </View>
                            <View style={styles.chat_view}>
                                <Text style={styles.chat_name}>Slideshow Group</Text>
                                <Text style={styles.chat_message}>Jack, Smith & David</Text>
                            </View>
                            <View style={styles.date_view}>
                                <Text style={styles.chat_date}>3:30 pm</Text>
                                <View style={styles.message_count}>
                                    <Text style={styles.message_countText}>4</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* Group Chat of 3 */}

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeWrapper: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.WHITE_1,
    },
    headTitle: {
        marginTop: 20,
        fontWeight: 'bold',
        color: Colors.BLACK,
        fontSize: 22,
    },
    friendListWrapper: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },

    chat_Component: {
        // backgroundColor: Colors.LIGHTBLUE,
        width: '100%',
        height: 80,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginVertical: 2,
    },
    profile_view: {
        width: '20%',
    },
    profile_Img: {
        width: 50,
        height: 50,
    },
    group_profile_Img: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginHorizontal: -2
    },
    friendCardWrapper: {
        // width: 45,
        // height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: Colors.BORDER_BLUE_COLOR,
        borderWidth: 2,
        borderStyle: 'solid',
        marginHorizontal: 10,
    },
    chat_view: {
        marginHorizontal: 5,
        width: '55%',
    },
    chat_message: {
        fontSize: 14,
    },
    chat_name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    date_view: {
        width: '20%',
        alignItems: 'flex-end'
    },
    chat_date: {
        fontSize: 14,
    },
    message_count: {
        alignItems: 'center',
    },
    message_countText: {
        fontSize: 14,
        color: Colors.WHITE,
        fontWeight: 'bold',
        backgroundColor: Colors.COUNT_RED,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
});
