import { GET_COMMENTS, GET_POSTS, GET_USERS, IS_LOGIN } from '../Types/actions_type';

let initialSate = {
    isLogin: false
};

const AppReducer = (state = initialSate, action) => {
    switch (action.type) {
        case IS_LOGIN:
            console.log('action payload---->',state,action  )
            state = { isLogin: action.payload };
            break;

        default:
            break;
    }
    return state;
};

export default AppReducer;