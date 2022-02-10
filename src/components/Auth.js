import classes from './Auth.module.css';
import { useRef } from 'react';
import { loginActions } from '../store/login';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
   e.preventDefault();
   const inputEmail = emailRef.current.value;
   const inputPassword = passwordRef.current.value;
   if(inputEmail.trim() == '' || inputPassword.trim() == ''){
     return;
   }
     dispatch(loginActions.login());
     console.log(isLoggedIn);
     console.log("should work");
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit = {submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef}/>
          </div>
          <button type = 'submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
