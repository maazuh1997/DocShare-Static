import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../../../Styles';
import {
  delete_gray,
  edit_black,
  file_blue,
  menu_gray,
  menu_gray_vertical,
  delete_black,
} from '../../../Assets';

export default class GroupUser extends Component {
  renderFileButton = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.GRAY_2,
          borderRadius: 10,
          elevation: 3,
          marginVertical: 7,
        }}>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            marginRight: 20,
          }}>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              height: 60,
              width: 60,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={file_blue}
              style={{height: 40, width: 40}}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{flex: 1, marginHorizontal: 10, justifyContent: 'center'}}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', color: Colors.GRAY_1}}>
              {item}
            </Text>
            <Text style={{fontSize: 12}}>{index + 2} Participants</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditGroup')}>
              <Image
                source={edit_black}
                style={{height: 20, marginTop: 10}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Image
              source={delete_black}
              style={{height: 20, marginTop: 10}}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'Document school',
            'Slideshow.ppt',
            'Exams file.docs',
            'Google.docs',
          ]}
          renderItem={this.renderFileButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
