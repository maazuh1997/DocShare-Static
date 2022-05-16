import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, TextInput} from '../../Components';
import {
  add_friend_icon,
  back_arror_white,
  email_icon,
  face1,
  face2,
  face3,
  face4,
  face5,
  Logo,
  notification_white,
  search,
  profile_camera,
} from '../../Assets';
import {Colors} from '../../Styles';

export default class PaymentHistory extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.WHITE_1}}>
        <FlatList
          style={{marginTop: 10}}
          data={[1, 1, 1]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: Colors.SETTING_BUTTON_BackGround,
                  elevation: 1,
                  width: '95%',
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: 5,
                  marginBottom: 5,
                }}>
                <View
                  style={{
                    backgroundColor: Colors.SETTING_BUTTON,
                    elevation: 2,
                    width: '95%',
                    flexDirection: 'row',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                    }}>
                    <Text
                      style={{
                        color: '#3E6D9C',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      Basic Plan
                    </Text>
                    <Text
                      style={{
                        color: '#5D5D5D',
                        fontSize: 10,
                      }}>
                      Purchase on February 13, 2020
                    </Text>
                    <Text
                      style={{
                        color: '#5D5D5D',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingTop: 5,
                      }}>
                      $50 / month
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      alignItems: 'flex-end',
                    }}>
                    <Text
                      style={{
                        color: '#707070',
                      }}>
                      Expired
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.CYAN,
                        width: 100,
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          color: Colors.WHITE,
                          fontWeight: 'bold',
                        }}>
                        Resubscribe
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
