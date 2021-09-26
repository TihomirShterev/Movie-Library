import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../redux/actions/userActions';
import styles from '../index.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(state => state.login);

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);

  const handleSubmit = async ev => {
    ev.preventDefault();
    dispatch(login(email, password));
  };

  if (loading) {
    return (
      <div>Loading....</div>
    );
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <fieldset>
        <h2>Login Form</h2>
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
        <p className={styles.error}>{error}</p>
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
