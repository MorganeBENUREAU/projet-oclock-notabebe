import {
  CHANGE_PASSWORD_STAFF,
  savePasswordStaff,
  saveNewPasswordStaff,
  
} from 'src/store/actions/staff';
import axios from 'axios';
import api from './utils/api';

const staff = (store) => (next) => (action) => {
  
  switch (action.type) {
    
    case CHANGE_PASSWORD_STAFF: {
      console.log('je suis dans le case CHANGE_PASSWORD_STAFF')
      const state = store.getState();
      const id = action.id;

      axios.patch(`http://notabebe-back.herokuapp.com/profile/staff/${id}/password`, {
        oldPassword: state.user.oldpassword,
        password: state.user.newpassword,
        id: action.id,
      })
        .then((response) => {
          const actionsChangePasswordStaff = saveNewPasswordStaff(response.data);
          console.log(response.data)
          store.dispatch(actionsChangePasswordStaff);
        })
        .catch((error) => {
          console.log('il y a eu une erreur dans le save password parent', error);
          // store.dispatch(changeInfosError());
        });
      break;
    }
    default:
      next(action);
  }
};

export default staff;
