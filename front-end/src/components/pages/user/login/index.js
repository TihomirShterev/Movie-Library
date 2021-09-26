import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from '../index.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidInputError, setInvalidInputError] = useState('');
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

    if (!email || !password) {
      setEmptyFieldsError('Please fill all fields above!');
    } else {
      setEmptyFieldsError('');
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      };

      const { data } = await axios.post(
        'http://localhost:3001/api/users/login',
        { email, password },
        config
      );

      localStorage.setItem('userInfo', JSON.stringify(data));
      const userInfo = localStorage.getItem('userInfo');

      if (userInfo) {
        setInvalidInputError('');
        history.push('/');
      }
    } catch (err) {
      setInvalidInputError('Invalid email or password!');
    }
  };

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <fieldset>
        <h2>Login Form</h2>

        <p className={styles["field field-icon"]}>
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
        </p>

        <p className={styles["field field-icon"]}>
          <label htmlFor="password">
            <span>
              <i className="fas fa-lock"></i>
            </span></label>
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
          {!emptyFieldsError && invalidInputError}
        </p>
        <p className={styles.error}>
          {emptyFieldsError}
        </p>
        <button type="submit">Login</button>

        <p className={styles["text-center"]}>
          No account yet?
          <Link to="/register">Register</Link>
        </p>

      </fieldset>
    </form>
  );
};

export default Login;
