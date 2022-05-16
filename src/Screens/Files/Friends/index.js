import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {face1, face2, face3, face4, person_crose} from '../../../Assets';
import {Colors} from '../../../Styles';

export default class FriendsTab extends Component {
  renderOneFriend = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Profile', {unFriend: true});
        }}
        style={{flexDirection: 'row', marginVertical: 10}}>
        <View>
          <Image
            source={item.image}
            style={{height: 70, width: 70}}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            marginHorizontal: 10,
          }}>
          <Text style={{color: Colors.BLACK, fontSize: 18, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <Text style={{color: Colors.TEXT_GRAY}}>{item.email}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={person_crose} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          data={[
            {name: 'John', image: face1, email: 'John123'},
            {name: 'David', image: face2, email: 'David542'},
            {name: 'Daniel', image: face3, email: 'Daniel452'},
            {name: 'Alexa', image: face4, email: 'Alexa987'},
          ]}
          renderItem={this.renderOneFriend}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: Colors.CYAN,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
    elevation: 5,
  },
  icon: {width: 20, height: 20},
});
