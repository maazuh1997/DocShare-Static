import React, { Component } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import {
    chat_attachment,
    chat_send,
    doc,
    face1,
    face2,
    face3,
    face4,
    face5,
    search,
    video_white,
} from '../../../Assets';
import { Header, } from '../../../Components';
import { Colors } from '../../../Styles';
import MapView, { Marker } from 'react-native-maps';
import deviceInfoModule from 'react-native-device-info';


const GOOGLE_MAPS_APIKEY = 'AIzaSyBBVMEPDktEjcindc7_NjCpFWsSWVspyKI';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class Chat extends Component {
    state = {
        loader: false,
        sendMessageLoader: false,
        text: '',
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        messages: [

            {
                id: 2,
                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            },
            {
                id: 1,
                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            },
            {
                id: 2,
                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            },
            {
                id: 1,
                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            },
            {
                id: 2,
                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
            },
            {
                id: 2,
                docName: 'Document school.pdf',
            },
            {
                id: 1,
                map: {
                    lat: 37.78825,
                    lng: -122.4324,
                },
            },


        ],
    };
    componentDidMount() {

    }

    sendMessage = () => {
        let { text, messages } = this.state;

        let dummyMessage = {
            id: 1,
            message: text,
        };

        messages.push(dummyMessage);
        this.setState({ messages, text: '' });
    };

    getInitialState() {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    renderMessages = ({ item }) => (
        <View
            style={{
                marginVertical: 12,
                flexDirection: item.id == 1 ? 'row-reverse' : 'row',
                alignItems: 'center',
            }}>
            <View style={{ paddingHorizontal: 10 }}>
                {item.id == 1 ?
                    <Image source={face1} style={styles.userImg} />
                    :
                    <Image source={face2} style={styles.userImg} />
                }
            </View>

            <View style={{ width: '70%', padding: 10, borderRadius: 5 }}>
                {item.docName ?
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('PassCode')}
                        style={{ width: '100%', height: 60, backgroundColor: Colors.ChatDocL, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', backgroundColor: Colors.WHITE, width: '95%', height: 60, alignItems: 'center', borderRadius: 10 }}>
                            <View style={{ backgroundColor: Colors.WHITE, padding: 10, borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                <Image source={doc} style={{ width: 25, height: 30, }} />
                            </View>
                            <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                                <Text
                                    style={{
                                        textAlign: item.id == 1 ? 'right' : 'left',
                                        color: '#636060',
                                    }}>
                                    {item.docName}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    :
                    null
                }

                {item.map ?
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Map')}
                        style={{ width: '100%', height: 100, backgroundColor: Colors.ChatDocL, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', backgroundColor: Colors.WHITE, width: '95%', height: 100, alignItems: 'center', borderRadius: 10 }}>


                            <MapView
                                initialRegion={{
                                    latitude: LATITUDE,
                                    longitude: LONGITUDE,
                                    latitudeDelta: LATITUDE_DELTA,
                                    longitudeDelta: LONGITUDE_DELTA,
                                }}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <Marker
                                    key={GOOGLE_MAPS_APIKEY}
                                    coordinate={{ latitude: item.map.lat, longitude: item.map.lng }}
                                    title={'here'}
                                    description={'I am /Here'}
                                />
                            </MapView>
                        </View>
                    </TouchableOpacity>
                    :
                    null
                }

                {item.message ?
                    <Text
                        style={{
                            textAlign: item.id == 1 ? 'right' : 'left',
                            color: '#636060',
                        }}>
                        {item.message}
                    </Text>
                    :
                    null
                }

                {/* <Text
                    style={{
                        textAlign: item.id == 1 ? 'right' : 'left',
                        color: '#636060',
                        fontSize: 12,
                    }}>
                    Just now
                </Text> */}
            </View>
        </View>
    );
    render() {
        const navigation = this.props.navigation;
        let hasNotch = deviceInfoModule.hasNotch();

        return (
            
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView 

                style={{ flex:1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ?(hasNotch ? 46 : 20) : undefined}
      behavior={Platform.OS === 'ios' ?  ('padding') : 'height'} >
                <Header
                    leftIcon={search}
                    rightIcon={video_white}
                    onPressRightIcon={() =>
                        this.props.route.params.type == 'group' ?
                            this.props.navigation.navigate('VideoCallGroup')
                            :
                            this.props.navigation.navigate('VideoCall')
                    }
                    headerText={'Chat'}
                />
                {/* <Text style={styles.msgDay}>Today</Text> */}

                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderMessages}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />

                <View style={styles.footer}>

                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        placeholder="Enter Message"
                        placeholderTextColor={'#8D8D8D'}
                        style={styles.input}
                    />
                    <TouchableOpacity style={{ marginLeft: 10, }}>
                        <Image source={chat_attachment} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.sendMessage}
                        style={{ paddingHorizontal: 10 }}>
                        <Image source={chat_send} style={{ width: 22, height: 22, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
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

    input: { flex: 1, paddingLeft: 14, color: '#636060', height : 40 },
    userImg: { width: 55, height: 55, borderRadius: 5 },
    msgDay: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    },
    footer: {
        paddingVertical: 4,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#8D8D8D',
        alignItems: 'center',
    },
});
