import { LOGIN_USER, REGISTER_USER, AUTH_USER, NAVER_LOGIN_USER } from "../_actions/types";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        case NAVER_LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        default:
            return state;
    }
}

export default reducer;