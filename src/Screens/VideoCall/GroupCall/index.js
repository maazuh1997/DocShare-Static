import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  bg,
  user,
  videoCall,
  attachmentCall,
  micCall,
  endCall,
  bg4,
  bg3,
  bg2,
} from '../../../Assets';
import {Header} from '../../../Components';
import {Colors} from '../../../Styles';
import MapView, {Marker} from 'react-native-maps';
import {back_arror_white} from '../../../Assets';
import {KeycodeInput} from 'react-native-keycode';
import {useDisclose} from 'native-base';
import ActionSheet from '../ActionSheet';

export default function VideoCallGroup({navigation}) {
  const {isOpen, onOpen, onClose} = useDisclose();

  return (
    <View style={{flex: 1}}>
      <Header headerText={'Group Video Call'} />
      <View
        style={{
          backgroundColor: 'white',
          flex: 0.1,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 10}}>Joined Participants </Text>
          <Text style={{fontSize: 10, color: Colors.BLUE}}>4 </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 10}}>Total Participants </Text>
          <Text style={{fontSize: 10, color: Colors.BLUE}}>3 </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 10}}>Remaining Participants </Text>
          <Text style={{fontSize: 10, color: Colors.BLUE}}>2 </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 0.8,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '48%',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '48%', height: '100%'}}>
            <Image style={styles.backgroundImg} source={bg2} />
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                left: 20,
                backgroundColor: '#000000',
                padding: 10,
              }}>
              <Text style={{color: Colors.WHITE}}>Jack</Text>
            </View>
          </View>
          <View style={{width: '48%', height: '100%'}}>
            <Image style={styles.backgroundImg} source={bg3} />
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                left: 20,
                backgroundColor: '#000000',
                padding: 10,
              }}>
              <Text style={{color: Colors.WHITE}}>Jon</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '48%',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '48%', height: '100%'}}>
            <Image style={styles.backgroundImg} source={bg} />
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                left: 20,
                backgroundColor: '#000000',
                padding: 10,
              }}>
              <Text style={{color: Colors.WHITE}}>Stacy</Text>
            </View>
          </View>
          <View style={{width: '48%', height: '100%'}}>
            <Image style={styles.backgroundImg} source={bg4} />
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                left: 20,
                backgroundColor: '#000000',
                padding: 10,
              }}>
              <Text style={{color: Colors.WHITE}}>Joseph</Text>
            </View>
          </View>
        </View>

        {/* <View style={{ position: 'absolute', right: 20, top: 20 }}>
                    <Image style={styles.userImg} source={user} />
                </View>
                <View style={{ position: 'absolute', bottom: 10, left: 20, backgroundColor: '#000000', padding: 10 }}>
                    <Text style={{ color: Colors.WHITE }}>Stacy</Text>
                </View> */}
      </View>
      <View
        style={{
          flex: 0.1,
          backgroundColor: Colors.WHITE,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <TouchableOpacity>
          <Image style={styles.icon} source={micCall} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={videoCall} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onOpen()}>
          <Image style={styles.icon} source={attachmentCall} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.icon} source={endCall} />
        </TouchableOpacity>
      </View>
      <ActionSheet isOpen={isOpen} onClose={onClose} />
    </View>
  );
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
    paddingBottom: 200,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userImg: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  icon: {
    width: 50,
    height: 50,
  },
});
