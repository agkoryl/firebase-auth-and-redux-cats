import { LOGIN, LOGOUT, TRY_LOGIN } from './constants';

export const login = (user) => ({
    type: LOGIN,
    user
})

export const logout = () => ({
    type: LOGOUT
});

export const tryLogin = () => ({

});