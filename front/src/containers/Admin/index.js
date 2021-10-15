import { connect } from 'react-redux';
import Admin from 'src/components/Admin';

import {
  fetchAllUsers,
  openModalDeleteUser,
  closeModalDeleteUser,
  deleteUser,
  AdminAddUser,
  resetFormAdmin,
  handleAddUser,
} from 'src/store/actions';
import { checkToken } from 'src/store/actions/authActions';

const mapStateToProps = (state) => ({

  loading: state.admin.loading,
  //isSearchActive: state.admin.isSearchActive,
  //foundUsers: state.admin.foundUsers,
  //dataUserList: state.admin.dataUserList,

  //users: state.admin.users,
  //error: state.admin.error,
  FormDeleteOpen: state.admin.FormDeleteOpen,
  userDeleteId: state.admin.userDeleteId,
  deletedUserSuccess: state.admin.deletedUserSuccess,
  deletedUserError: state.admin.deletedUserError,
  usersList: state.admin.usersList
});

const mapDispatchToProps = (dispatch) => ({

  fetchAllUsers: () => {
    dispatch(fetchAllUsers());
  },

  addUserFalse: () => {
    dispatch(handleAddUser())
  },

  onClickOpenFormDeleteUser: (userDeleteId) => {
    dispatch(openModalDeleteUser(userDeleteId));
  },

  onClickCloseFormDeleteUser: (userDeleteId) => {
    dispatch(closeModalDeleteUser(userDeleteId));
  },

  deleteUser: (userDeleteId) => {
    dispatch(deleteUser(userDeleteId));
  },

  handleAddUser: () => {
    dispatch(AdminAddUser());
  },
  resetFormAdmin: () => {
    dispatch(resetFormAdmin());
  },
  checkIsLogged: () => {
    dispatch(checkToken());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);