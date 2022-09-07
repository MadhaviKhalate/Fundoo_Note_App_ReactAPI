import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin/signin';
import Signup from './Pages/Signup/signup';
// import Header from './Components/Header/header';
//import TakeNoteOne from './Components/TakeNoteOne/takenoteone';
// import TakeNoteTwo from './Components/TakeNoteTwo/takenotetwo';
//import TakeNoteThree from './Components/TakeNoteThree/takenotethree';
import Dashboard from './Pages/Dashboard/Dashboard';
import RouterComp from './Router/router';
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <Header/> */}
      {/* <TakeNoteOne/> */}
      {/* <TakeNoteTwo/> */}
      {/* <TakeNoteThree/> */}
      {/* <Dashboard/> */}
      
      <Provider store={store}>
      <RouterComp/>
     </Provider>
    </div>
  );
}

export default App;
