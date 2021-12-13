import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Link , NaviLink ,Route ,Routes ,Switch} from 'react-router-dom';
// import Winter from './Compo/Winter';
import Winter1 from './Compo/Winter1';
import Submitform from './Compo/Submitform';
// import Stylewinter from './Compo/Stylewinter.css';
// import Paymenthistory from './History/Paymenthistory';
function App() {
  return (
    <>
    <BrowserRouter>
                      <Routes> 
                        <Route exact path='/' element={ <Winter1/> } /> 
                        <Route path='/Submitform'  element={ <Submitform />}/>    
                      </Routes>  
                     
    </BrowserRouter>
        
      {/* <Paymenthistory/> */}
      </>
     
  );
}

export default App;
