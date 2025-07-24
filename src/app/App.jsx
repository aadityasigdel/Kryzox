
import { useSelector } from 'react-redux';
import RouteHandler from "../routes/Routes";
const App = () => {
  const {isAuthenticate}=useSelector(state=>state.auth);
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

export default App;
