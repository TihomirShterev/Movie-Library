import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../../../redux/actions/userActions';
import styles from '../index.module.css';

const EMAIL_PATTERN = /^[\w.]{5,}@[a-z]{3,}\.[a-z]{2,}$/g;
const PASSWORD_PATTERN = /^\S{6,}$/g;
const PASSWORD_MIN_LENGTH = 6;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');
  const [emptyFieldsError, setEmptyFieldsError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(state => state.register);

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  const handleSubmit = async ev => {
    ev.preventDefault();
    const hasEmptyField = !email || !password || !rePassword;
    const isInvalidEmail = email && EMAIL_PATTERN.test(email) === false;
    const isInvalidPassword = password && PASSWORD_PATTERN.test(password) === false;
    const isInvalidRePassword = rePassword && rePassword !== password;

    if (isInvalidEmail) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }

    if (isInvalidPassword) {
      setPasswordError('Please enter a valid password');
    } else {
      setPasswordError('');
    }

    if (isInvalidRePassword) {
      setRePasswordError('Please enter a matching password');
    } else {
      setRePasswordError('');
    }

    if (hasEmptyField) {
      setEmptyFieldsError('Please fill all fields above');
    } else {
      setEmptyFieldsError('');
    }

    const hasNoError = (
      EMAIL_PATTERN.test(email)
      && password.length >= PASSWORD_MIN_LENGTH
      && rePassword
      && rePassword === password
    );

    if (hasNoError) {
      dispatch(register(email, password));
    }
  };

  if (loading) {
    return (
      <div>Loading....</div>
    );
  }

  return (
    <form className={styles.register} onSubmit={handleSubmit}>
      <fieldset>
        <h2>Registration Form</h2>
        <div className={styles["field field-icon"]}>
          <label htmlFor="email">
            <span><i className="fas fa-envelope"></i></span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            placeholder="pesho.peshev@gmail.com"
          />
        </div>
        <p className={styles.error}>{emailError || error}</p>
        <div className={styles["field field-icon"]}>
          <label htmlFor="password">
            <span><i className="fas fa-lock"></i></span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            placeholder="******"
          />
        </div>
        <p className={styles.error}>{passwordError}</p>
        <div className={styles["field field-icon"]}>
          <label htmlFor="rePassword">
            <span><i className="fas fa-lock"></i></span>
          </label>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            value={rePassword}
            onChange={ev => setRePassword(ev.target.value)}
            placeholder="******"
          />
        </div>
        <p className={styles.error}>{rePasswordError}</p>
        <p className={styles.error}>{emptyFieldsError}</p>
        <button type="submit">Create Account</button>
        <p className={styles["text-center"]}>
          Already registered?
          <Link to="/login">Login</Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Register;
