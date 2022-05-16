import logError from 'react-native/Libraries/Utilities/logError';
import { GET_COMMENTS, GET_POSTS, GET_USERS, IS_LOGIN } from '../Types/actions_type';

class AuthAction {
    static isLogin = payload => {
        return {
            type: IS_LOGIN,
            payload: payload,
        };
    };

}

export default AuthAction;