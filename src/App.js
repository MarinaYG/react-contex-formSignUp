import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import Home from './pages/Home'
import Private from './pages/private/Private';
import UserHome from './pages/private/userHome/UserHome';

function App() {
  return (
    <div className="App">
      <SignUpModal />
      <SignInModal />
      <Navbar/>
      
      <Routes>    
        <Route path='/' element = {<Home/>} />
        <Route path ='/private' element = {<Private />} >
              <Route path ='/private/UserHome' element ={<UserHome/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
