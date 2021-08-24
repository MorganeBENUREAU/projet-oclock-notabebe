/* eslint-disable import/prefer-default-export */

// actions page de bienvenue
export const GET_WELCOME_PAGE = 'GET_WELCOME_PAGE';
export const GET_WELCOME_PAGE_SUCCESS = 'GET_WELCOME_PAGE_SUCCESS';

// actions login
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const CHANGE_VALUE_LOGIN = 'CHANGE_VALUE_LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// actions user
export const OPEN_CHANGE_INFOS = 'OPEN_CHANGE_INFOS';
export const CHANGE_INFOS = 'CHANGE_INFOS';
export const TOGGLE_CHANGE_PASSWORD = 'TOGGLE_CHANGE_PASSWORD';
export const CLOSE_FORM = 'CLOSE_FORM';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const INFOS_ERROR = 'INFOS_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const SAVE_INFOS_USER = 'SAVE_INFOS_USER';
export const SAVE_PASSWORD_USER = 'SAVE_PASSWORD_USER';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';

export const SAVE_USERS_PARENTS = 'SAVE_USERS_PARENTS';
export const FETCH_USERS_PARENTS = 'FETCH_USERS_PARENTS';

export const SEND_COMMENT = 'SEND_COMMENT';

// actions login
export const createLoginSuccessAction = (nickname) => ({ type: LOGIN_SUCCESS, nickname });
export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });
export const changeValueLogin = (value, key) => ({
  type: CHANGE_VALUE_LOGIN,
  key,
  value,
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

// actions user
export const openChangeInfos = () => ({
  type: OPEN_CHANGE_INFOS,
});

export const changeFieldValue = (key, value) => ({
  type: CHANGE_FIELD_VALUE,
  value,
  key,
});

export const changeTextValue = (value) => ({
  type: CHANGE_TEXT_VALUE,
  value,
});

export const changeInfos = () => ({
  type: CHANGE_INFOS,
});

export const toggleChangePassword = () => ({
  type: TOGGLE_CHANGE_PASSWORD,
});

export const closeFormAction = () => ({
  type: CLOSE_FORM,
});

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

export const passwordError = () => ({
  type: LOGIN_ERROR,
});

export const infosError = () => ({
  type: LOGIN_ERROR,
});

export const saveInfosUser = () => ({
  type: SAVE_INFOS_USER,
});

export const savePasswordUser = () => ({
  type: SAVE_PASSWORD_USER,
});

export const fetchUsersParents = () => ({
  type: FETCH_USERS_PARENTS,
});

export const saveUsersParents = (users_parents) => ({
  type: SAVE_USERS_PARENTS,
  payload: users_parents,
});

export const sendComment = () => ({
  type: SEND_COMMENT,
});
