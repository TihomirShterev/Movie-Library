import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../index.module.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');
  const [emptyFieldsError, setEmptyFieldsError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      history.push('/');
    }
  }, [history]);

  const handleSubmit = async ev => {
    ev.preventDefault();

    if (0 < email.length && /^[\w.]+@[a-z]+\.[a-z]+$/.test(email) === false) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }

    if (0 < password.length && password.length < 6) {
      setPasswordError('Please enter a valid password consisting at least 6 characters');
    } else {
      setPasswordError('');
    }

    if (0 < rePassword.length && rePassword !== password) {
      setRePasswordError('Please enter a matching password');
    } else {
      setRePasswordError('');
    }

    if (!email || !password || !rePassword) {
      setEmptyFieldsError('Please fill all fields above');
    } else {
      setEmptyFieldsError('');
    }

    const hasNoError = (
      /^[\w.]+@[a-z]+\.[a-z]+$/.test(email)
      && password.length >= 6
      && rePassword
      && rePassword === password
    );


    if (hasNoError) {
      try {
        const config = {
          headers: {
            'Content-type': 'application/json'
          }
        };

        const { data } = await axios.post(
          'http://localhost:3001/api/users/register',
          { email, password, rePassword },
          config
        );

        localStorage.setItem('userInfo', JSON.stringify(data));
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
          history.push('/');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form className={styles.register} onSubmit={handleSubmit}>
      <fieldset>
        <h2>Registration Form</h2>

        <p className={styles["field field-icon"]}>
          <label htmlFor="email"><span><i className="fas fa-envelope"></i></span></label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            placeholder="pesho.peshev@gmail.com"
          />
        </p>
        <p className={styles.error}>
          {emailError}
        </p>

        <p className={styles["field field-icon"]}>
          <label htmlFor="password"><span><i className="fas fa-lock"></i></span></label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            placeholder="******"
          />
        </p>
        <p className={styles.error}>
          {passwordError}
        </p>

        <p className={styles["field field-icon"]}>
          <label htmlFor="rePassword"><span><i className="fas fa-lock"></i></span></label>
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            value={rePassword}
            onChange={ev => setRePassword(ev.target.value)}
            placeholder="******"
          />
        </p>
        <p className={styles.error}>
          {rePasswordError}
        </p>

        <p className={styles.error}>
          {emptyFieldsError}
        </p>
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
