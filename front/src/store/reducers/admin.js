import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  LOGOUT_ADMIN,
  USER_LIST_LOADING,
  USER_LIST_LOAD_SUCCESS,
  USER_LIST_LOAD_ERROR,
  SEARCH_CONTACTS,
  OPEN_MODAL_DELETE_USER,
  CLOSE_MODAL_DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from '../actions';

const initialState = {
  // userList: [],
  // loading: true,

  loading: false,
  error: null,
  dataUserList: [],
  isSearchActive: false,
  foundUsers: [],
  users: [],
  FormDeleteOpen: false,
  userDeleteId: null,

};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    // case GET_ALL_USERS: {
    //   return {
    //     ...oldState,
    //     loading: true,
    //   };
    // }
    // case GET_ALL_USERS_SUCCESS:
    //   return {
    //     ...oldState,
    //     userList: action.payload,
    //     loading: false,
    //   };
    // case LOGOUT_ADMIN:
    //   return {
    //     ...oldState,
    //     userList: [],
    //   };
    case USER_LIST_LOADING: {
      return {
        ...oldState,
        // listUsers: {
        //   ...oldState.listUsers,
        loading: true,
        // },
      };
    }
    case USER_LIST_LOAD_SUCCESS: {
      return {
        ...oldState,
        // listUsers: {
        // ...oldState.listUsers,
        loading: false,
        dataUserList: action.payload,
        // },
      };
    }
    case USER_LIST_LOAD_ERROR: {
      return {
        ...oldState,
        // listUsers: {
        // ...oldState.listUsers,
        loading: false,
        error: action.payload,
        // },
      };
    }
    // case SEARCH_CONTACTS: {
    //   const searchValue = action.payload?.toLowerCase();
    //   return {
    //     ...oldState,
    //     // listUsers: {
    //     //   ...oldState.listUsers,
    //       loading: false,
    //       isSearchActive: !!action.payload.length > 0 || false,
    //       foundUsers: oldState.data.filter((item) => {
    //         try {
    //           return (
    //             item.first_name.toLowerCase().search(searchValue) !== -1
    //             || item.last_name.toLowerCase().search(searchValue) !== -1
    //             || item.phone_number.toLowerCase().search(searchValue) !== -1
    //           );
    //         }
    //         catch (error) {
    //           return [];
    //         }
    //       }),
    //     // },
    //   };
    // }
    case OPEN_MODAL_DELETE_USER: {
      return {
        ...oldState,
        FormDeleteOpen: !oldState.FormDeleteOpen,
        // FormDeleteOpen: true,
        userDeleteId: action.userDeleteId,
      };
    }
    case CLOSE_MODAL_DELETE_USER: {
      return {
        ...oldState,
        FormDeleteOpen: oldState.FormDeleteOpen,
        userDeleteId: action.userDeleteId,
      };
    }
    case DELETE_USER_SUCCESS: {
      const filteredUsers = oldState.admin.filter((user) => user.id !== action.payload.id);
      console.log('TEST DELETE CLICK filteredUsers', filteredUsers);
      return {
        ...oldState,
        users: filteredUsers,
      };
    }
    case DELETE_USER_ERROR: {
      return {
        ...oldState,
        error: action.payload,
      };
    }
    default:
      return oldState;
  }
};

export default reducer;
