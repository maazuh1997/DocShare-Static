import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button, Header, Modal, Text, TextInput} from '../../Components';
import React, {Component} from 'react';
import {
  delete_gray,
  document,
  download_gray,
  menu_gray,
  notification_white,
  passcode_icon,
  red_horizontal_dots,
  search,
  share_white,
  star_blue,
} from '../../Assets';
import {Colors} from '../../Styles';
import Share from 'react-native-share';

export default class FileDetail extends Component {
  state = {
    isShowMenu: false,
    isShowDeleteFileModal: false,
    isShowPasscodeModal: false,
    isShowCreatePasscodeFormModal: false,
  };
  renderMenu = () => {
    let menuItems = [
      {
        label: 'Create Passcode',
        icon: passcode_icon,
        onPress: () =>
          this.setState({isShowPasscodeModal: true, isShowMenu: false}),
      },
      {
        label: 'Delete',
        icon: delete_gray,
        onPress: () =>
          this.setState({isShowDeleteFileModal: true, isShowMenu: false}),
      },
      {
        label: 'Download',
        icon: download_gray,
        onPress: () => {
          this.setState({isShowMenu: false});
        },
      },
    ];

    return (
      <View style={{position: 'absolute', top: 20, right: 20}}>
        <TouchableOpacity
          onPress={() => this.setState({isShowMenu: !this.state.isShowMenu})}
          style={{}}>
          <Image
            source={red_horizontal_dots}
            style={{width: 30}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        {this.state.isShowMenu ? (
          <View
            style={{
              position: 'absolute',
              top: 20,
              right: 0,
              backgroundColor: Colors.WHITE,
              width: 230,
              height: 140,
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 5,
              elevation: 5,
            }}>
            <FlatList
              data={menuItems}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={item.onPress}
                    style={{
                      flexDirection: 'row',
                      height: 40,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.icon}
                      style={{height: 20, paddingHorizontal: 25}}
                      resizeMode={'contain'}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: Colors.TEXT_GRAY,
                      }}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
      </View>
    );
  };

  renderDeleteFileModal = () => {
    return (
      <Modal visible={this.state.isShowDeleteFileModal}>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <Image
            source={delete_gray}
            style={{height: 60, alignSelf: 'center'}}
            resizeMode={'contain'}
          />
          <Text
            style={{
              color: Colors.GRAY_LIGHT,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Are you sure you want to{' '}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: Colors.TEXT_GRAY,
              textAlign: 'center',
            }}>
            Delete file?
          </Text>
          <View style={{flexDirection: 'row', width: '100%', marginTop: 20}}>
            <Button
              btnText={'Not right now'}
              theme={'white'}
              style={{flex: 1, marginRight: 5}}
            />
            <Button
              btnText={`Yes I'm`}
              theme={'cyan'}
              style={{flex: 1, marginLeft: 5}}
              onPress={() => this.setState({isShowDeleteFileModal: false})}
            />
          </View>
        </View>
      </Modal>
    );
  };

  renderPasscodeModal = () => {
    return (
      <Modal visible={this.state.isShowPasscodeModal}>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <Image
            source={star_blue}
            style={{height: 60, alignSelf: 'center'}}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: Colors.TEXT_GRAY,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Create Passcode
          </Text>
          <Text style={{color: Colors.GRAY_LIGHT, textAlign: 'center'}}>
            Please Upgrade Your Plan{' '}
          </Text>
          <Button
            btnText={'Subscribe'}
            theme={'cyan'}
            style={{width: 150, alignSelf: 'center', marginTop: 20}}
            onPress={() =>
              this.setState({
                isShowPasscodeModal: false,
                isShowCreatePasscodeFormModal: true,
              })
            }
          />
        </View>
      </Modal>
    );
  };

  renderCreatePassCodeFormModal = () => {
    return (
      <Modal visible={this.state.isShowCreatePasscodeFormModal}>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 22,
              color: Colors.BLACK,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Create Passcode
          </Text>
          <Text
            style={{
              color: Colors.GRAY_LIGHT,
              color: Colors.BLACK,
              fontWeight: 'bold',
            }}>
            File Name{' '}
          </Text>
          <Text
            style={{
              color: Colors.GRAY_LIGHT,
              color: Colors.TEXT_GRAY,
              fontSize: 18,
            }}>
            House agreement.png
          </Text>
          <TextInput label={'Set New Passcode'} value={'**********'} />
          <Button
            btnText={'Set Passcode'}
            theme={'cyan'}
            style={{marginTop: 10}}
            onPress={() =>
              this.setState({isShowCreatePasscodeFormModal: false})
            }
          />
        </View>
      </Modal>
    );
  };

  onPressShare = () => {
    Share.open({})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <Header
            leftIcon={search}
            rightIcon={notification_white}
            onPressRightIcon={() =>
              this.props.navigation.navigate('Notification')
            }
            headerText={'PREVIEW'}
          />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              backgroundColor: Colors.WHITE_1,
            }}>
            <Text
              style={{
                color: Colors.BLACK,
                fontWeight: 'bold',
                fontSize: 20,
                marginVertical: 20,
              }}>
              {'House Agreement'}
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FileEdit')}>
                <Image
                  source={document}
                  style={{height: 500, width: '100%', borderRadius: 15}}
                />
              </TouchableOpacity>
              {this.renderMenu()}
              <TouchableOpacity
                onPress={this.onPressShare}
                style={{
                  backgroundColor: Colors.BLUE,
                  position: 'absolute',
                  bottom: -30,
                  left: '45%',
                  height: 60,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  elevation: 3,
                }}>
                <Image
                  source={share_white}
                  style={{height: 30, width: 30}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.renderDeleteFileModal()}
        {this.renderPasscodeModal()}
        {this.renderCreatePassCodeFormModal()}
      </>
    );
  }
}

const styles = StyleSheet.create({});
