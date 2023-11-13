import{Routes, Route} from 'react-router-dom';
import './App.css';
import LoginForm from '../src/components/Auth/auth';
import Signup from '../src/components/Signup/signup';
import Home from '../src/components/Home/home'
// import Videos from '../src/components/Videos/videos';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path ="/auth" element={<LoginForm/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path="/home" element={<Home/>}/>
      {/* <Route exact path='/videos' element={<Videos/>}/> */}
   
      
     </Routes>
    </div>
  );
}

export default App;