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
} from '../../Assets';
import {Header} from '../../Components';
import {Colors} from '../../Styles';
import MapView, {Marker} from 'react-native-maps';
import {back_arror_white} from '../../Assets';
import {KeycodeInput} from 'react-native-keycode';
import ActionSheet from './ActionSheet';
import {useDisclose} from 'native-base';

export default function VideoCall({navigation}) {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <View style={{flex: 1}}>
      <Header
        // leftIcon={search}
        // rightIcon={video_white}
        headerText={'Video Call'}
      />
      <View style={{backgroundColor: 'white', flex: 0.9}}>
        <Image style={styles.backgroundImg} source={bg} />
        <View style={{position: 'absolute', right: 20, top: 20}}>
          <Image style={styles.userImg} source={user} />
        </View>
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
