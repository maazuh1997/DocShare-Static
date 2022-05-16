import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from '../Modal';
import SearchBox from '../SearchBox';
import {
  check_icon,
  face1,
  face2,
  face3,
  search,
  unchecked_icon,
  white_cross_icon,
} from '../../Assets';
import {Colors} from '../../Styles';
import Button from '../Button';

const TagFrind = ({isOpen, setTagFriendModal}) => {
  const friendList = [
    {
      name: 'Sam',
      images: face1,
      id: 1,
    },
    {
      name: 'David',
      images: face2,
      id: 2,
    },
    {
      name: 'Adam',
      images: face3,
      id: 3,
    },
  ];

  const [selectedFriend, setSelectedFriend] = useState([]);

  const renderItem = ({item, index}) => {
    let has_added = selectedFriend.find(element => element.id == item.id);
    console.log(has_added, 'has_added');
    return (
      <TouchableOpacity
        onPress={() => {
          if (has_added) {
            let friends = [...selectedFriend];
            friends.splice(index, 1);
            setSelectedFriend(friends);
          } else setSelectedFriend([...selectedFriend, item]);
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={item.images}
          resizeMode="contain"
          style={{width: 50, height: 50}}
        />
        <Text
          style={{
            marginLeft: 20,
            fontWeight: 'bold',
            color: Colors.BLACK,
            fontSize: 18,
          }}>
          {item.name}
        </Text>
        <Image
          resizeMode="contain"
          style={{marginLeft: 'auto', width: 20, height: 20}}
          source={has_added ? check_icon : unchecked_icon}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      setTagFriendModal={setTagFriendModal}
      visible={isOpen}
      style={{height: '65%'}}>
      <View style={{paddingHorizontal: 10}}>
        <View style={{marginVertical: 15}}>
          <SearchBox icon={search} placeholder="Search Friend" />
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={StyleSheet.selectListWrapper}>
          {selectedFriend.map((val, ind) => {
            return (
              <View style={styles.selectedBox}>
                <Text style={{color: Colors.BLACK}}>{val.name}</Text>
                <TouchableOpacity
                  onPress={() => {
                    let friends = selectedFriend;
                    friends.splice(ind, 1);
                    setSelectedFriend([...selectedFriend]);
                  }}
                  style={styles.closeBtn}>
                  <Image
                    resizeMode="contain"
                    source={white_cross_icon}
                    style={styles.crossImg}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <FlatList
          style={{
            width: '100%',
            marginVertical: 10,
            height: 180,
          }}
          renderItem={renderItem}
          data={friendList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={{marginTop: 25}}>
          <Button
            btnText={'Tag User'}
            onPress={() => setTagFriendModal(false)}
            theme="blue"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  selectListWrapper: {
    backgroundColor: 'red',
    width: '100%',
  },
  selectedBox: {
    flexDirection: 'row',
    width: 100,
    height: 40,
    backgroundColor: Colors.WHITE_1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY_BUTTON,
    marginRight: 10,
    marginVertical: 10,
  },
  closeBtn: {
    borderRadius: 50,
    width: 15,
    height: 15,
    backgroundColor: Colors.GRAY_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossImg: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});

export default TagFrind;
