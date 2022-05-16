import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, TextInput} from '../../Components';
import {
  add_friend_icon,
  back_arror_white,
  email_icon,
  face1,
  Logo,
  notification_white,
  person_crose,
  search,
} from '../../Assets';
import {Colors} from '../../Styles';
export default class Profile extends Component {
  render() {
    console.log(this.props.route.params);
    return (
      <View style={{flex: 1}}>
        <Header
          leftIcon={back_arror_white}
          headerText={'PROFILE'}
          leftIconStyle={{backgroundColor: Colors.CYAN}}
          onPressLeftIcon={() => this.props.navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: Colors.WHITE_1,
            flex: 1,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              width: '100%',
              height: 300,
              marginTop: 50,
              borderRadius: 20,
              borderColor: Colors.GRAY_BORDER,
              borderWidth: 2,
              borderStyle: 'solid',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 10,
            }}>
            <Image
              source={face1}
              style={{
                borderRadius: 50,
                width: 80,
                height: 80,
                marginBottom: 10,
              }}
              resizeMode="contain"
            />
            <Text
              style={{fontWeight: 'bold', fontSize: 20, color: Colors.BLACK}}>
              JOHN CENA
            </Text>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Text style={{fontWeight: '500', color: Colors.BLACK}}>
                Email
              </Text>
              <Text style={{fontWeight: '500', color: Colors.GRAY_LIGHT}}>
                johntesting12@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: Colors.BLUE,
                width: 150,
                height: 60,
                marginHorizontal: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={email_icon}
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.WHITE,
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Send Message
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.CYAN,
                width: 150,
                height: 60,
                marginHorizontal: 10,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={
                  this.props?.route?.params?.unFriend
                    ? person_crose
                    : add_friend_icon
                }
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Colors.WHITE,
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                {this.props?.route?.params?.unFriend
                  ? 'Remove User'
                  : 'Add User'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
