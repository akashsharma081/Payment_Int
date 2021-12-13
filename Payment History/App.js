import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Link , NaviLink ,Route ,Routes ,Switch} from 'react-router-dom';
import Winter from './Compo/Winter';
import Lottie from './Compo/Lottie';
import Paymenthistory from './History/Paymenthistory';
function App() {
  return (
    <>
       <Winter/>  
      {/* <Lottie/>    */}
      {/* <Paymenthistory/> */}
      </>
     
  );
}

export default App;
