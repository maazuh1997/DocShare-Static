import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  face1,
  face2,
  face3,
  face4,
  face5,
  notification_white,
  plus_icon,
  search,
} from '../../Assets';
import {Header} from '../../Components';
import PostCard from '../../Components/Home/PostCard';
import {Colors} from '../../Styles';

const friendList = [
  {
    id: 1,
    image: face1,
  },
  {
    image: face2,
    id: 2,
  },
  {
    image: face3,
    id: 3,
  },
  {
    image: face4,
    id: 4,
  },
  {
    image: face5,
    id: 5,
  },
];

export default class Home extends Component {
  render() {
    const navigation = this.props.navigation;
    const friendCarts = ({item}) => {
      return (
        <View style={styles.friendCardWrapper}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{width: 40, height: 40}}
          />
        </View>
      );
    };
    return (
      <View style={{flex: 1}}>
        <Header
          fontSize={14}
          leftIcon={search}
          rightIcon={notification_white}
          onPressRightIcon={() =>
            this.props.navigation.navigate('Notification')
          }
          headerText={'Share, Edit & Chat Real Time'}
        />
        <View style={styles.homeWrapper}>
          <Text style={styles.headTitle}>Users</Text>

          <View style={styles.friendListWrapper}>
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => navigation.navigate('SearchFriend')}>
              <Image style={styles.iconImg} source={plus_icon} />
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <FlatList
                data={friendList}
                renderItem={friendCarts}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <PostCard />
            <PostCard />
          </ScrollView>
        </View>
      </View>
    );
  }
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
  friendListWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },

  addBtn: {
    backgroundColor: Colors.LIGHTBLUE,
    marginRight: 10,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconImg: {
    width: 18,
    height: 18,
  },
  friendCardWrapper: {
    // width: 45,
    // height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.BORDER_BLUE_COLOR,
    borderWidth: 2,
    borderStyle: 'solid',
    marginHorizontal: 10,
  },
});
