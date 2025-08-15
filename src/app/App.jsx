
import { useSelector,useDispatch } from 'react-redux';
import RouteHandler from "../routes/Routes";
import { login } from '../store/slices/auth.slice';
import { useEffect } from 'react';
const App = () => {
  const {isLoggedIn,isAuthenticate}=useSelector(state=>state.auth);
    const dispatch=useDispatch();
  console.log({isAuthenticate});
  useEffect(()=>{
if(!isLoggedIn){
  if(localStorage.getItem("token")){
    dispatch(login());
  }
}
  },[])
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

export default App;
