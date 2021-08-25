import { connect } from 'react-redux';
import { fetchUsersParents } from 'src/store/actions';
import { fetchUserLogged } from 'src/store/actions/userload';
import { checkToken } from 'src/store/actions/userlogin';

import { findUser } from 'src/store/selectors/user';


import App from 'src/components/App';

const mapStateToProps = (state, ownProps) => ({
  // isLogged: isUserLogged(state),
  logged: isUserLogged(state),
  children: state.user.children,
  //user: findUser(state.user.list, ownProps.match.params.id),
  //user: state.user,
  loading: state.user.loading,
const mapStateToProps = (state) => ({
  // loading: state.userload.loading,
  loading: state.userload,
  logged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkToken());
  },
  loadUserLogged: () => {
    dispatch(fetchUserLogged());
  },
  loadUsersParents: () => {
    dispatch(fetchUsersParents());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
