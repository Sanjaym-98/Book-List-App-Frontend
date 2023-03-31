import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Bookrecord from './components/Bookrecord';
import Editbook from './components/Editbook';
import Addbook from './components/Addbook';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<SignIn/>} />
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/addbook' element={<Addbook/>}/>
    <Route path='/bookrecord' element={<Bookrecord/>}/>
    <Route path='/editbook' element={<Editbook/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
