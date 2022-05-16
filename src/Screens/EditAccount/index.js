import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
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
  profile_camera
} from '../../Assets';
import {Colors} from '../../Styles';

export default class EditAccount extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftIcon={back_arror_white}
          headerText={'EDIT ACCOUNT'}
          leftIconStyle={{backgroundColor: Colors.CYAN}}
          onPressLeftIcon={()=>this.props.navigation.goBack()}
        />
        <ScrollView
          style={{
            backgroundColor: Colors.WHITE_1,
            flex: 1,
            paddingHorizontal: 30,
          }}>
            <View style={{
              marginTop: 30,
              height: 80,
              width: 80,
              alignSelf: 'center',
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}>
            <Image
              source={face4}
              style={{
                borderRadius: 50,
                width: 80,
                height: 80,
                marginBottom: 10,
                alignSelf: 'center'
              }}
              resizeMode="contain"
            />
            <TouchableOpacity
            style={{
              position: 'absolute',
            }}
            >
            <Image
              source={profile_camera}
              style={{
                // borderRadius: 50,
                width: 30,
                height: 30,
                marginLeft: 5,
                marginBottom: 5,
                alignSelf: 'center'
              }}
              resizeMode="contain"
            />
            </TouchableOpacity>
            </View>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, color: Colors.BLACK, alignSelf: 'center', textAlign: 'center'}}>
              David James
            </Text>


            <TextInput label={'Name'} value={'david james'} />
            <TextInput label={'Email'} value={'david.james@gmail.com'} />
            
          

          <View style={{marginTop: 20, marginBottom: 20, width:'100%',alignSelf: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.CYAN,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 2,
                marginLeft: 5,
                marginRight: 5
              }}>
              <Text
                style={{
                  color: Colors.WHITE,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
