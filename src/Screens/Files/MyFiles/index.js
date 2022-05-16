import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  document,
  document2,
  document3,
  document4,
  file_gradient,
  lock_white,
  menu_white,
  red_three_dots,
} from '../../../Assets';
import {Colors} from '../../../Styles';
import {useNavigation} from '@react-navigation/native';

const MyFiles = ({toggleFileMenuModal}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={[document, document2, document3, document4]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FileDetail')}
            style={{flex: 1, margin: 10}}>
            <Image
              source={item}
              style={{
                width: '100%',
                height: 230,
                borderRadius: 14,
                borderWidth: 0.7,
                borderColor: Colors.TEXT_GRAY,
              }}
            />
            <TouchableOpacity
              onPress={toggleFileMenuModal}
              style={{
                width: 10,
                height: 25,
                position: 'absolute',
                right: 12,
                top: 25,
              }}>
              <Image
                source={red_three_dots}
                style={{
                  width: 18,
                  height: 25,
                  right: 5,
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Image
              source={lock_white}
              style={{height: 25, position: 'absolute', top: 25}}
              resizeMode={'contain'}
            />
            <View
              style={{
                width: '100%',
                position: 'absolute',
                bottom: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{fontWeight: 'bold', color: Colors.WHITE, fontSize: 15}}>
                Legal Documents
              </Text>
              <Text style={{fontSize: 10, color: Colors.WHITE}}>
                Contract Rev 1
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyFiles;

const styles = StyleSheet.create({});
