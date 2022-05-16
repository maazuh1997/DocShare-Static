import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, TextInput} from '../../Components';
import {
  back_arrow,
  document_blue_icon,
  group_blue_icon,
  Logo,
  notification_white,
  passcode_blue_icon,
  photo_blue_icon,
  search,
  video_blue_icon,
} from '../../Assets';
import {Colors} from '../../Styles';

export default function SubScriptionPlan({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon={back_arrow}
        rightIcon={notification_white}
        onPressRightIcon={() => this.props.navigation.navigate('Notification')}
        onPressLeftIcon={() => navigation.navigate('Setting')}
        headerText={'SUBSCRIPTION PLAN'}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: Colors.WHITE_1,
        }}>
        <SubscriptionCardCmp
          planName="Basic Plan"
          price="50"
          features={[
            {title: 'Photos', icon: photo_blue_icon},
            {title: 'Documents', icon: document_blue_icon},
          ]}
        />
        <SubscriptionCardCmp
          planName="Premium Plan"
          price="150"
          features={[
            {title: 'Photos', icon: photo_blue_icon},
            {title: 'Documents', icon: document_blue_icon},
            {title: 'Video Call', icon: video_blue_icon},
            {title: 'Set Passcode', icon: passcode_blue_icon},
            {title: '3+ Group Members', icon: group_blue_icon},
          ]}
        />
      </View>
    </View>
  );
}

const FeatureItem = ({title, icon}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 10,
            height: 5,
            backgroundColor: Colors.GRAY_2,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 50,
            width: 25,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: Colors.GRAY_2,
          }}>
          <Image
            source={icon}
            style={{
              width: 15,
              height: 15,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={{marginLeft: 5}}>{title}</Text>
    </View>
  );
};

const SubscriptionCardCmp = ({planName, price, features}) => {
  console.log(features, 'features');
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_2,
        borderRadius: 5,
        flex: 1,
        marginTop: 20,
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_BG,
          flex: 1,
          marginRight: 15,
          marginBottom: 5,
          marginLeft: 2,
          borderRadius: 5,
        }}>
        <View
          style={{
            width: '60%',
            backgroundColor: Colors.BLUE,
            padding: 25,
            alignItems: 'center',
            borderTopRightRadius: 24,
            borderBottomRightRadius: 24,
            borderBottomLeftRadius: 24,
          }}>
          <Text style={{color: Colors.WHITE, fontSize: 20, fontWeight: 'bold'}}>
            {planName}
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: 'green',
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            {features?.map((val, ind) => {
              return <FeatureItem title={val.title} icon={val.icon} />;
            })}
          </View>
          <View
            style={{
              flex: 0.8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 40,
              }}>
              ${price}
            </Text>
            <Text style={{color: Colors.TEXT_GRAY}}>per month</Text>
            <Button
              btnText="Subscribe"
              theme="cyan"
              style={{
                width: '80%',
                borderRadius: 5,
                height: 40,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
