import React from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { login,logout } from '../store/slices/auth.slice';
import Home from '../pages/Home';
import RouteHandler from '../routes/routes';
const App = () => {
  const {isAuthenticate}=useSelector(state=>state.auth);
  const dispatch=useDispatch();
  console.log({isAuthenticate});
  return (
    <div>
      {/* {
      isAuthenticate? <div><p>"Welcome to world of react js !!" </p><button onClick={()=>dispatch(logout())}>logout</button></div>:
      <div><p>Please login to continue </p><button onClick={()=>dispatch(login())}>login</button></div>
      } */}
      <RouteHandler/>
    </div>
  )
}

export default App
