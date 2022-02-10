import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = {
  isLoggedIn : false
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
   login(state){
     state.isLoggedIn = true;
   },
   logout(state){
    state.isLoggedIn = false;
  }
  }
});
export const loginActions = loginSlice.actions;
export default loginSlice.reducer;