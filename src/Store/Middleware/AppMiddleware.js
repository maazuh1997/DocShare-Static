import Axios from 'axios';
import AppAction from '../Actions/AppAction';
import Apis from '../Apis';


class AppMiddleware {

  static getUsers = () => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(Apis.getUsers);
          dispatch(AppAction.getUsers(data));
        } catch (error) {
          reject(error);
          alert('Network Error');
          console.log(error);
        }
      });
    };
  };

  static getPosts = () => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(Apis.getPosts);
          dispatch(AppAction.getPosts(data));
        } catch (error) {
          reject(error);
          alert('Network Error');
        }
      });
    };
  };

  static getComments = () => {
    return dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(Apis.getComments);
          dispatch(AppAction.getComments(data));
        } catch (error) {
          reject(error);
          alert('Network Error');
        }
      });
    };
  };

}

export default AppMiddleware;