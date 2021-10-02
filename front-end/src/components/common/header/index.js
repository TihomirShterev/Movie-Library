import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/userActions';
import SearchBar from '../searchBar';
import styles from './index.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.login);

  const handleLogout = () => dispatch(logout());

  return (
    <header>
      <nav className={styles["nav-bar"]}>
        <ul className={styles.authentication}>
          {
            userInfo
              ? <>
                <li><Link to="/">My Movie Collection</Link></li>
                <li><Link to="/">Hi, {userInfo.email}</Link></li>
                <li><a href="/" onClick={handleLogout}>Logout</a></li>
              </>
              : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
          }
        </ul>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;
