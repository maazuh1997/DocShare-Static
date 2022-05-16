import {Text, View, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, TextInput} from '../../Components';
import {
  add_friend_icon,
  back_arror_white,
  email_icon,
  face1,
  face4,
  key,
  Logo,
  notification_white,
  search,
} from '../../Assets';
import {Colors} from '../../Styles';
import ToggleSwitch from 'toggle-switch-react-native'

export default class SecurityAndPrivacy extends Component {

  constructor() {
    super();
    this.state = {
      isOn: false
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          leftIcon={back_arror_white}
          headerText={'SECURITY AND PRIVACY'}
          leftIconStyle={{backgroundColor: Colors.CYAN}}
          onPressLeftIcon={()=>this.props.navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: Colors.WHITE_1,
            flex: 1,
            paddingHorizontal: 30,
          }}>

              <Text style={{
                  color: '#1C1D1F',
                  paddingTop: 30,
                  paddingBottom: 10
              }}>Notification</Text>
          
          <View 

          style={{backgroundColor: Colors.WHITE, height: 60, borderRadius: 10, borderWidth: 1, borderColor: '#707070', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}
          >
              <Text style={{color: '#1C1D1F', paddingLeft: 10, fontWeight: 'bold'}}>Allow Notification</Text>
              
              <View style={{
                  marginRight: 10,
                   marginTop: 3
              }}>
              <ToggleSwitch
                isOn={this.state.isOn}
                onColor="#27D56C"
                offColor="grey"
                size="small"
                onToggle={val => this.setState({isOn : val})}
                />
                </View>

          </View>

          <View
          style={{borderWidth :0.5, borderColor: '#505050', borderStyle: 'dashed', marginTop: 10}}
          />

          <Text style={{
                  color: '#1C1D1F',
                  paddingTop: 30,
                  paddingBottom: 10
              }}>Security</Text>

            <View
            style={{backgroundColor: '#0659FD', elevation: 1, width: '60%', borderRadius: 10, marginTop: 5, marginBottom: 5, height: 35}}
            >
            <TouchableOpacity
            style={{backgroundColor: Colors.SETTING_BUTTON, elevation: 2, width: '93%', height: 35, flexDirection: 'row', borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly'}}
            >
              <Image
              source={key}
              style={{height: 20, width: 20}}
              />
              <Text
              style={{color: '#707070', fontWeight : 'bold'}}
              >
                  Change password
              </Text>
            
            </TouchableOpacity>
            </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
