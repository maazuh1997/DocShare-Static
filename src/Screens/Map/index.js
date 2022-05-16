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
    Dimensions
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
    back_arrow,
    video_white,
} from '../../Assets';
import { Header, } from '../../Components';
import { Colors } from '../../Styles';
import MapView, { Marker } from 'react-native-maps';
import { back_arror_white } from '../../Assets';


const GOOGLE_MAPS_APIKEY = 'AIzaSyBBVMEPDktEjcindc7_NjCpFWsSWVspyKI';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class Map extends Component {
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

    };
    componentDidMount() {

    }



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


    render() {
        const navigation = this.props.navigation;

        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftIcon={back_arrow}
                    onPressLeftIcon={()=> this.props.navigation.goBack()}
                    // rightIcon={video_white}
                    headerText={'Map'}
                />
                {/* <Text style={styles.msgDay}>Today</Text> */}


                <View>
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
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                            title={'here'}
                            description={'I am /Here'}
                        />
                    </MapView>
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

    input: { flex: 1, paddingLeft: 14, color: '#636060' },
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
