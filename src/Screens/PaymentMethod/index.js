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

export default class PaymentMethod extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: Colors.WHITE_1}}>
        <FlatList
          style={{marginTop: 10}}
          data={[{cartNum: '2214'}, {cartNum: '5541'}, {cartNum: '8954'}]}
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
                  <Image
                    source={face4}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 30,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  />
                  <View>
                    <Text style={{color: '#000'}}>
                      ************{item.cartNum}
                    </Text>
                    <Text style={{color: '#000'}}>Expire 10/24</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.CYAN,
                      width: 70,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        color: Colors.WHITE,
                        fontWeight: 'bold',
                      }}>
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: Colors.CYAN,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            width: '95%',
            alignSelf: 'center',
            bottom: 20,
          }}>
          <Text
            style={{
              color: Colors.WHITE,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Add Card
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
