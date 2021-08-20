import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { isUserLogged } from 'src/store/selectors';

const mapStateToProps = (state) => ({
  isLogged: isUserLogged(state),
  loggedMessage: `Bonjour ${state.nickname}`,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch({ type: 'LOGOUT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
