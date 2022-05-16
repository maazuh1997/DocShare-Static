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
import { KeycodeInput } from 'react-native-keycode'



export default class PassCode extends Component {
    state = {
        value: '',
        numeric: true


    };
    componentDidMount() {

    }


    render() {
        const navigation = this.props.navigation;

        return (
            <View style={{ flex: 1 }}>
                <Header
                    leftIcon={back_arrow}
                    onPressLeftIcon={() => this.props.navigation.goBack()}
                    // rightIcon={video_white}
                    headerText={'Enter Passcode'}
                />
                {/* <Text style={styles.msgDay}>Today</Text> */}


                <View style={styles.container}>


                    <KeycodeInput
                        numeric={this.state.numeric}
                        value={this.state.value}
                        length={5}
                        onChange={(newValue) => this.setState({ value: newValue })}
                        onComplete={(completedValue) => {
                            // alert('Completed! Value: ' + completedValue);
                            this.props.navigation.goBack()
                        }} />

                    <View style={{marginVertical:50}}>
                        <Text style={styles.text}>ENTER YOUR PASSCODE</Text>
                    </View>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingBottom: 200
    },
});
