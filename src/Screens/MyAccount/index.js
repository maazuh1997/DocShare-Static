import {Text, View, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, TextInput} from '../../Components';
import {
  add_friend_icon,
  back_arror_white,
  email_icon,
  face1,
  face4,
  Logo,
  notification_white,
  search,
} from '../../Assets';
import {Colors} from '../../Styles';
export default class MyAccount extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftIcon={back_arror_white}
          headerText={'MY ACCOUNT'}
          leftIconStyle={{backgroundColor: Colors.CYAN}}
          onPressLeftIcon={()=>this.props.navigation.goBack()}
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
              source={face4}
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
              David James
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

          <View style={{position: "absolute",bottom:20,width:'100%',alignSelf: 'center'}}>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate("EditAccount")}
              style={{
                backgroundColor: Colors.CYAN,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 2,
              }}>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
