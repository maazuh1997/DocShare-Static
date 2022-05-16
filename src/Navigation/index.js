import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { connect, Provider } from 'react-redux';
import AuthAction from '../Store/Actions/AppAction';
import { store } from '../Store/store';
import App from './App';
import Auth from './Auth';
import { SafeAreaView, Platform } from 'react-native'

const AppNavigation = ({ isLogin }) => {
  useEffect(() => {
    SplashScreen.hide();

  }, [])
  console.log('isLogin->isLogin', isLogin)
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {Platform.OS === 'ios' ?
          <SafeAreaView style={{ flex: 1 }}>

            {isLogin ? <App /> : <Auth />}
          </SafeAreaView>
          :
          isLogin ? <App /> : <Auth />
        }
        {/* <SafeAreaView style={{ flex:1}}>

        {isLogin ? <App /> : <Auth />}
        </SafeAreaView> */}

      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const mapStateToProps = (state) => {
  console.log('state->', state.isLogin)
  return {
    isLogin: state.isLogin
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation)
