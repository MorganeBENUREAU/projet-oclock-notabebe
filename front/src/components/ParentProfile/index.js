import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';

import Children from 'src/components/ParentProfile/Children';
import ChangePasswordForm from 'src/components/ParentProfile/ChangePasswordForm';
import ChangeUserInfosForm from 'src/components/ParentProfile/ChangeUserInfosForm';
import UserInfos from 'src/components/ParentProfile/UserInfos';

import Header from 'src/components/Header';

import './styles.scss';


const ParentProfile = ({
  openUserInfos,
  isOpenInfos,
  closeForm,
  handleChangeInfos,
  isOpenPassword,
  togglerChangePassword,
  handleChangePassword,
  //findParent,
  
  user,
  child,
  
  loadUsersParents,
  

}) => {

  useEffect(() => {

    loadUsersParents();
  }, []);

  console.log("loadUsersParents:", loadUsersParents())
  //console.log('mes enfants dans parentprofile', children)
  //console.log("mon enfant dans parentprofile", child)
  
  const handleOnClickChangePasswordButton = () => {
    togglerChangePassword();
  }

  const handleOnClickChangeInfosButton = () => {
    openUserInfos();
  };
  
  return (
  <>
    <header className="header">
      <Header />
    </header>

    <div className="parentprofile">
    {!isOpenInfos ? (
      <>
     <UserInfos 
        user={user}
        openUserInfos={openUserInfos}
        
     />
      <button 
        type="button" 
        className="parentprofile__button"
        onClick={handleOnClickChangeInfosButton}
      >
      Modifier mes informations
      </button>
      </>
    ) : (
      <ChangeUserInfosForm 
        closeForm={closeForm}
        handleChangeInfos={handleChangeInfos}
        user={user}
      />
    )}

  {!isOpenPassword ? (
      <button 
          type="button" 
          className="parentprofile__button"
          onClick={handleOnClickChangePasswordButton}
        >
        Changer mon mot de passe
        </button>
    ): (
    
      <ChangePasswordForm 
        closeForm={closeForm}
        handleChangePassword={handleChangePassword}
        user={user}
      />
    )}  

      <Children 
        //children={myChildren}
        user={user}
        //child={child}
      />
    </div>

  </>
    )
};

ParentProfile.propTypes = {
  openUserInfos: PropTypes.func.isRequired,
  isOpenInfos: PropTypes.bool,
  closeForm: PropTypes.func.isRequired,
  handleChangeInfos: PropTypes.func.isRequired,
  isOpenPassword: PropTypes.bool,
  togglerChangePassword: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  
  // children: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //   }),
  // ).isRequired,
  
//   user: PropTypes.shape({ 
//     id: PropTypes.number.isRequired,
//   }).isRequired,
 };

ParentProfile.defaultProps = {
  isOpenInfos: false,
  isOpenPassword: false,
};

export default ParentProfile;
