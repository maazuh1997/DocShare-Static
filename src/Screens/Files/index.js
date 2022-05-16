import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import {Button, Header, SearchBar, TextInput} from '../../Components';
import {
  back_arrow,
  document,
  Logo,
  menu_white,
  notification_white,
  plus_white,
  search,
} from '../../Assets';
import {Colors} from '../../Styles';
import MyFiles from './MyFiles';
import FileMenuModal from './FileMenuModal';
import FriendsTab from './Friends';
import Recent from './Recent';
import GroupUser from './GroupUser';

const {height, width} = Dimensions.get('window');
class Files extends Component {
  state = {
    tabs: [
      {
        label: 'My Files',
        isActive: true,
        heading: 'Shared Files',
        header: 'FILES',
      },
      {
        label: 'Users',
        isActive: false,
        heading: 'User list',
        header: 'USERS',
      },
      {label: 'Recent', isActive: false, heading: 'Recent', header: 'RECENT'},
      {
        label: 'Group',
        isActive: false,
        heading: 'Group',
        header: 'GROUP LIST',
      },
    ],
    isShowFileMenuModal: false,
  };

  onPressLabel = item => {
    this.state.tabs.map(x => {
      x.isActive = false;
    });
    item.isActive = !item.isActive;
    this.setState({});
  };

  toggleFileMenuModal = () => {
    this.setState({isShowFileMenuModal: !this.state.isShowFileMenuModal});
  };
  render() {
    const activeTabIndex = this.state.tabs.findIndex(x => x.isActive === true);
    const activeTab = this.state.tabs[activeTabIndex];
    return (
      <View style={{flex: 1}}>
        <Header
          leftIcon={back_arrow}
          rightIcon={activeTabIndex === 3 ? plus_white : notification_white}
          onPressLeftIcon={() => this.props.navigation.navigate('Home')}
          onPressRightIcon={() =>
            this.props.navigation.navigate(
              activeTabIndex === 3 ? 'CreateGroup' : 'Notification',
            )
          }
          headerText={activeTab.header}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            backgroundColor: Colors.WHITE_1,
          }}>
          <SearchBar />
          <View style={{}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 22, color: Colors.BLACK}}>
              {activeTab.heading}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
            {this.state.tabs.map(x => {
              return x.isActive ? (
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.BLACK,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}>
                    {x.label}
                  </Text>
                  <View
                    style={{
                      backgroundColor: Colors.BLACK,
                      height: 8,
                      width: 8,
                      borderRadius: 30,
                      marginVertical: 5,
                    }}
                  />
                </View>
              ) : (
                <TouchableOpacity onPress={() => this.onPressLabel(x)}>
                  <Text style={{color: Colors.TEXT_GRAY}}>{x.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {activeTabIndex === 0 && (
            <MyFiles
              toggleFileMenuModal={this.toggleFileMenuModal}
              navigation={this.props.navigation}
            />
          )}
          {activeTabIndex === 1 && (
            <FriendsTab
              toggleFileMenuModal={this.toggleFileMenuModal}
              navigation={this.props.navigation}
            />
          )}
          {activeTabIndex === 2 && (
            <Recent
              toggleFileMenuModal={this.toggleFileMenuModal}
              navigation={this.props.navigation}
            />
          )}
          {activeTabIndex === 3 && (
            <GroupUser
              toggleFileMenuModal={this.toggleFileMenuModal}
              navigation={this.props.navigation}
            />
          )}
        </View>

        <FileMenuModal
          isVisible={this.state.isShowFileMenuModal}
          toggleFileMenuModal={this.toggleFileMenuModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Files;
