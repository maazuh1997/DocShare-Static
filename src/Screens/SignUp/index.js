import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../../Styles';
import {apple_white, fb_white, logo_white, mail_white} from '../../Assets';
import {Button, TextInput} from '../../Components';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo_white} style={styles.logo} resizeMode={'contain'} />
        <ScrollView style={styles.bodyContainer}>
          <Text style={styles.welcomText}>Signup</Text>
          <Text style={styles.lightGrayText}>
            Signup to create your personal account
          </Text>
          <View style={styles.socialContainer}>
            <View
              style={[
                styles.socialIconContainer,
                {backgroundColor: Colors.FB_BLUE},
              ]}>
              <Image
                source={fb_white}
                style={styles.socialIcon}
                resizeMode={'contain'}
              />
            </View>
            <View
              style={[
                styles.socialIconContainer,
                {backgroundColor: Colors.BLACK},
              ]}>
              <Image
                source={apple_white}
                style={styles.socialIcon}
                resizeMode={'contain'}
              />
            </View>
            <View
              style={[
                styles.socialIconContainer,
                {backgroundColor: Colors.GMAIL_RED},
              ]}>
              <Image
                source={mail_white}
                style={styles.socialIcon}
                resizeMode={'contain'}
              />
            </View>
          </View>
          <Text style={styles.msg1}>Or connect with your email</Text>
          <TextInput label={'Name'} value={'David James'} />
          <TextInput label={'Email'} value={'david.james@gmail.com'} />
          <TextInput label={'Password'} value={'**********'} />
          <TextInput label={'Confirm Password'} value={'**********'} />
          <Button
            btnText={'Create an account'}
            theme={'cyan'}
            style={{marginTop: 30}}
            onPress={() => this.props.navigation.navigate('Login')}
          />
          <Text
            style={styles.msg2}
            onPress={() => this.props.navigation.navigate('Login')}>
            Already have an account?
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE,
    paddingBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  welcomText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.BLACK,
  },
  lightGrayText: {
    color: Colors.GRAY_LIGHT,
  },
  socialContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  socialIconContainer: {
    width: 90,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  msg1: {
    color: Colors.GRAY_LIGHT,
    alignSelf: 'center',
  },
  msg2: {color: Colors.GRAY_LIGHT, alignSelf: 'center', marginVertical: 25},
  socialIcon: {height: 25, width: 25},
  logo: {width: '50%', alignSelf: 'center'},
});
