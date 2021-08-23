import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Login = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  handleLogin,
  isError,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="loginForm">
      <div className="loginForm__title">
        Connexion
      </div>
      {isError
        && (
        <div className="loginForm__errorMsg">
          <p className="loginForm__errorMsg__error">
            Erreur de connexion
          </p>
          <p className="loginForm__errorMsg__errorBis">
            Veuillez vérifier vos identifiants de connexion
          </p>
        </div>
        )}
      <form
        className="loginForm__content"
        onSubmit={handleSubmit}
      >
        <input
          className="settings__input"
          value={email}
          onChange={onEmailChange}
          placeholder="Votre email"
          type="email"
          required
        />
        <input
          className="settings__input"
          value={password}
          onChange={onPasswordChange}
          type="password"
          placeholder="Votre mot de passe"
          required
        />
        <button
          className="settings__send"
          type="submit"
        >
          Se connecter
        </button>
        <Link to="/forgot-password">
          <p className="settings__forgot">
            Mot de passe oublié
          </p>
        </Link>
      </form>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default Login;