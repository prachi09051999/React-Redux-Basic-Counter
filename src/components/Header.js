import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../store/login';
const Header = () => {
  const isLogin = useSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isLogin && (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
             <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
