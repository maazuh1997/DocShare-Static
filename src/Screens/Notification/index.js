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
    back_arrow,
    attachmentsent,
    joined,
    request,
    pdf
} from '../../Assets';
import { Header } from '../../Components';
import PostCard from '../../Components/Home/PostCard';
import { Colors } from '../../Styles';



export default class Notification extends Component {
    render() {
        const navigation = this.props.navigation;
        const chatMessages = ({ item }) => {
            return (
                <TouchableOpacity
                    style={styles.chat_Component}
                // onPress={() => navigation.navigate('Chat')}
                >
                    <View style={{ width: '10%' }}>
                        <View style={styles.redDot}></View>
                    </View>
                    <View style={{ width: '70%' }}>
                        <View style={styles.profile_view}>
                            <Image style={styles.profile_Img} source={face1} />
                            <Text style={styles.chat_name}>Jacob</Text>
                            <Text style={styles.chat_date}>6 min</Text>
                        </View>
                        <View>
                            <Text style={styles.chat_message}>Thank you for sharing</Text>
                        </View>
                    </View>
                    <View style={styles.date_view}>
                        <View style={styles.message_count}>
                            <Image style={styles.profile_Img} source={attachmentsent} />
                        </View>
                    </View>
                </TouchableOpacity>
            );
        };
        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftIcon={back_arrow}
                    onPressLeftIcon={() => this.props.navigation.goBack()}
                    // rightIcon={message_white}
                    headerText={'Notifications'}
                />
                <ScrollView style={styles.homeWrapper}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                            Notifications
                        </Text>
                        <View style={styles.message_count}>
                            <Text style={styles.message_countText}>4</Text>
                        </View>
                    </View>

                    {/* Attachment Image */}
                    <TouchableOpacity
                        style={styles.chat_Component}
                    // onPress={() => navigation.navigate('Chat')}
                    >
                        <View style={{ width: '10%' }}>
                            <View style={styles.redDot}></View>
                        </View>
                        <View style={{ width: '70%' }}>
                            <View style={styles.profile_view}>
                                <Image style={styles.profile_Img} source={face1} />
                                <Text style={styles.chat_name}>Jacob</Text>
                                <Text style={styles.chat_date}>6 min</Text>
                            </View>
                            <View>
                                <Text style={styles.chat_message}>Shared a photo with you</Text>
                            </View>
                        </View>
                        <View style={styles.date_view}>
                            <View style={styles.message_count}>
                                <Image style={styles.sentAttachment} source={attachmentsent} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Attachment Image */}

                    {/* Joined User */}
                    <TouchableOpacity
                        style={styles.chat_Component}
                    // onPress={() => navigation.navigate('Chat')}
                    >
                        <View style={{ width: '10%' }}>
                            <View style={styles.redDot}></View>
                        </View>
                        <View style={{ width: '70%' }}>
                            <View style={styles.profile_view}>
                                <Image style={styles.profile_Img} source={face3} />
                                <Text style={styles.chat_name}>David</Text>
                                <Text style={styles.chat_date}>6 min</Text>
                            </View>
                            <View>
                                <Text style={styles.chat_message}>Joined Docshr</Text>
                            </View>
                        </View>
                        <View style={styles.date_view}>
                            <View style={styles.joinedBg}>
                                <Image style={styles.joinedIcon} source={joined} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Joined User */}

                    {/* Request User */}
                    <TouchableOpacity
                        style={styles.chat_Component}
                    // onPress={() => navigation.navigate('Chat')}
                    >
                        <View style={{ width: '10%' }}>
                            <View style={styles.redDot}></View>
                        </View>
                        <View style={{ width: '70%' }}>
                            <View style={styles.profile_view}>
                                <Image style={styles.profile_Img} source={face2} />
                                <Text style={styles.chat_name}>John</Text>
                                <Text style={styles.chat_date}>6 min</Text>
                            </View>
                            <View>
                                <Text style={styles.chat_message}>Sent a friend request</Text>
                            </View>
                        </View>
                        <View style={styles.date_view}>
                            <View style={styles.joinedBg}>
                                <Image style={styles.joinedIcon} source={request} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Request User */}


                    {/* Comment Added */}
                    <TouchableOpacity
                        style={styles.chat_Component}
                    // onPress={() => navigation.navigate('Chat')}
                    >
                        <View style={{ width: '10%' }}>
                            <View style={styles.redDot}></View>
                        </View>
                        <View style={{ width: '70%' }}>
                            <View style={styles.profile_view}>
                                <Image style={styles.profile_Img} source={face4} />
                                <Text style={styles.chat_name}>Sam</Text>
                                <Text style={styles.chat_date}>6 min</Text>
                            </View>
                            <View>
                                <Text style={styles.chat_message}>New Comment Added on Doc.pdf</Text>
                            </View>
                        </View>
                        <View style={styles.date_view}>
                            {/* <View style={styles.joinedBg}> */}
                                <Image style={styles.pdfIcon} source={pdf} />
                            {/* </View> */}
                        </View>
                    </TouchableOpacity>
                    {/* Comment Added */}

                    

                </ScrollView>
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
        // paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginVertical: 2,
    },
    profile_view: {
        // width: '20%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile_Img: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    sentAttachment: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    joinedIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    pdfIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
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
        marginHorizontal: 5
    },
    chat_name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    date_view: {
        width: '10%',
        alignItems: 'center'
    },
    chat_date: {
        fontSize: 14,
    },
    message_count: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    joinedBg: {
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#E3E3E5',
        padding: 10,
        borderRadius: 10
    },
    message_countText: {
        fontSize: 16,
        color: Colors.WHITE,
        fontWeight: 'bold',
        backgroundColor: Colors.COUNT_RED,
        paddingHorizontal: 15,
        // paddingVertical: 5,
        borderRadius: 8,
    },
    redDot: {
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: Colors.COUNT_RED,
        marginHorizontal: 10
    },
});
