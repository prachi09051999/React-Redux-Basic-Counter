import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import loginReducer from './login';

const store = configureStore({reducer: 
  {
   counter: counterReducer,
   login: loginReducer
  }
});

export default store