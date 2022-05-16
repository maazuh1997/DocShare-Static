import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, SearchBox} from '../../Components';
import {
  back_arrow,
  face1,
  face2,
  face3,
  face4,
  face5,
  Logo,
  notification_white,
  search,
} from '../../Assets';
import {Colors} from '../../Styles';

const friendListObj = [
  {
    id: 1,
    name: 'Joseph',
    image: face1,
  },
  {
    id: 2,
    name: 'John',
    image: face2,
  },
  {
    id: 3,
    name: 'David',
    image: face3,
  },
  {
    id: 4,
    name: 'Alexa',
    image: face4,
  },
];

export default class SearchFriend extends Component {
  render() {
    const friendList = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profile')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={{width: 55, height: 55, borderRadius: 50}}
          />
          <Text style={{marginLeft: 20, color: Colors.GRAY_LIGHT}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        <Header
          rightIcon={notification_white}
          leftIcon={back_arrow}
          onPressLeftIcon={() => this.props.navigation.navigate('Home')}
          onPressRightIcon={() =>
            this.props.navigation.navigate('Notification')
          }
          headerText={'USER'}
        />

        <View style={styles.screenWrapper}>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text style={styles.headingTitle}>Search Users</Text>
          </View>
          <SearchBox icon={search} placeholder="Search User" />
          <View style={styles.friendListWrapper}>
            <FlatList
              data={friendListObj}
              renderItem={friendList}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: Colors.WHITE,
  },
  headingTitle: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  friendListWrapper: {backgroundColor: 'white', flex: 1, marginTop: 20},
});
