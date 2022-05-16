import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Header, Modal, SearchBox} from '../../Components';
import {
  face1,
  face2,
  face3,
  grey_delete_bucket,
  modal_cross_icon,
  search,
} from '../../Assets';
import {Colors} from '../../Styles';

export default function EditGroup() {
  const [selectedFriend, setSelectedFriend] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
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
    {
      name: 'Adam',
      images: face3,
      id: 4,
    },
    {
      name: 'Adam',
      images: face2,
      id: 34,
    },
    {
      name: 'Adam',
      images: face1,
      id: 35,
    },
  ];

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
        <TouchableOpacity
          style={{marginLeft: 'auto'}}
          onPress={() => setIsOpen(true)}>
          <Image
            resizeMode="contain"
            style={{width: 20, height: 20}}
            source={grey_delete_bucket}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon={search}
        // rightIcon={notification_white}
        headerText={'EDIT GROUP'}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: Colors.WHITE_1,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.WHITE,
            paddingHorizontal: 15,
          }}>
          <TextInput
            style={{
              //   backgroundColor: 'red',
              borderBottomColor: Colors.GRAY_BORDER,
              borderBottomWidth: 1,
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}
            placeholder="Doc share group"
          />

          <View style={{marginVertical: 10}}>
            <Text
              style={{color: Colors.BLACK, fontSize: 20, fontWeight: 'bold'}}>
              Doc share group
            </Text>
            <Text>
              This group is to Share documents with students and teachers
            </Text>
          </View>
          <SearchBox icon={search} placeholder="Search Friend" />
          <View>
            <FlatList
              style={{
                width: '100%',
                marginVertical: 10,
                height: 250,
              }}
              renderItem={renderItem}
              data={friendList}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={{marginTop: 30}}>
            <Button btnText="Exit Group" theme="blue" />
          </View>
        </View>
        <Modal onPressCloseIcon={() => setIsOpen(false)} visible={isOpen}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image
              source={modal_cross_icon}
              style={{width: 100, height: 100}}
            />
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>David</Text>
            <Text style={{color: Colors.TEXT_GRAY}}>Removed From Group</Text>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
