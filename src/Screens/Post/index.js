import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { Header, SearchBar, Button, SearchBox, TagFrind } from '../../Components';
import {
  camera_icon,
  cross_icon,
  doucment_icon,
  face1,
  gallery1,
  gallery2,
  grey_plus_icon,
  Logo,
  notification_white,
  search,
  tag_friend_icon,
} from '../../Assets';
import { Colors } from '../../Styles';
import { Actionsheet, Icon, useDisclose } from 'native-base';
import ActionSheet from './ActionSheet';
import { useNavigation } from '@react-navigation/native';

export default Post = () => {
  const navigation = useNavigation()
  const { isOpen, onOpen, onClose } = useDisclose();
  const [tagFriendModal, setTagFriendModal] = useState(false);
  console.log(tagFriendModal, 'tagFriendModal');

  const data = [
    {
      image: gallery1,
      id: 1,
    },
    {
      image: gallery2,
      id: 2,
    },
    {
      type: 'jsx',
      jsx: (
        <TouchableOpacity
          style={{
            backgroundColor: Colors.WHITE_1,
            width: 150,
            height: 150,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            marginVertical: 5,
          }}
          onPress={() => onOpen()}>
          <Image
            resizeMode="contain"
            style={{ width: 80, height: 80 }}
            source={grey_plus_icon}
          />
        </TouchableOpacity>
      ),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <>
        {item.type !== 'jsx' ? (
          <View>
            <Image
              resizeMode="cover"
              //   style={{width: 80, height: 80}}
              style={{
                backgroundColor: Colors.LIGHT_GREY_BUTTON,
                width: 150,
                height: 150,
                borderRadius: 20,
                marginHorizontal: 5,
                marginVertical: 5,
              }}
              source={item.image}
            />
            <Image
              source={cross_icon}
              style={{
                position: 'absolute',
                right: 0,
                top: 1,
                width: 20,
                height: 20,
                backgroundColor: Colors.GRAY_BORDER,
                borderRadius: 50,
              }}
            />
          </View>
        ) : (
          item.jsx
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <Header
        leftIcon={search}
        rightIcon={notification_white}
        onPressRightIcon={() => navigation.navigate('Notification')}
        headerText={'POST'}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          //   backgroundColor: Colors.WHITE_1,
        }}>
        {/* <Button onPress={onOpen}>Actionsheet</Button> */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Image source={face1} style={{ width: 40, height: 40 }} />
          <View style={{ marginLeft: 10, flexDirection: 'row' }}>
            <Text style={{ color: Colors.BLACK, fontWeight: 'bold' }}>
              David James
            </Text>
            <Text
              style={{
                color: Colors.TEXT_GRAY,
                paddingHorizontal: 5,
              }}>
              is with 1
            </Text>
            <Text style={{ color: Colors.BLACK, fontWeight: 'bold' }}>Jacob</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 60,
            paddingVertical : Platform.OS === 'ios' ? 20 : null
          }}>
          <TextInput placeholder="Write your first message" />
        </View>
        <View
          style={{
            width: '100%',
            height: 250,
          }}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Button btnText={'Post'} theme={'blue'} />
        </View>

        <TagFrind
          isOpen={tagFriendModal}
          setTagFriendModal={setTagFriendModal}
        />

        <ActionSheet
          isOpen={isOpen}
          onClose={onClose}
          setTagFriendModal={setTagFriendModal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
