export const CHANGE_PASSWORD_STAFF = 'CHANGE_PASSWORD_STAFF';
export const SAVE_NEW_PASSWORD_STAFF = 'SAVE_NEW_PASSWORD_STAFF';

export const changePassword = (id) => ({
  type: CHANGE_PASSWORD_STAFF,
  id,
});

export const saveNewPasswordStaff = () => ({
  type: SAVE_NEW_PASSWORD_STAFF,
})
