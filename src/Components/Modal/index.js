import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal as RNModal,
} from 'react-native';
import React, {Component} from 'react';
import {Colors} from '../../Styles';
import {cross_icon} from '../../Assets';

export default class Modal extends Component {
  render() {
    const {children, visible, style, onPressCloseIcon} = this.props;
    return (
      <RNModal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={[
              {
                backgroundColor: Colors.BLUE,
                minHeight: 300,
                width: '85%',
                borderRadius: 20,
              },
              style,
            ]}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.WHITE,
                marginTop: 25,
                borderRadius: 20,
              }}>
              {children}
              {onPressCloseIcon && (
                <TouchableOpacity
                  style={{
                    top: 10,
                    position: 'absolute',
                    right: 10,
                    width: 20,
                    height: 20,
                  }}
                  onPress={onPressCloseIcon}>
                  <Image
                    style={{
                      top: 10,
                      position: 'absolute',
                      right: 10,
                      width: 20,
                      height: 20,
                    }}
                    source={cross_icon}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </RNModal>
    );
  }
}

const styles = StyleSheet.create({});
