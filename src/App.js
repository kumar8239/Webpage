//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import UserLogin from './component/UserLogin';
import UserRegister from './component/UserRegister';
import CandidateSearch from './component/CandidateSearch';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/register" element={<UserRegister/>} />
        <Route path="/search" element={<CandidateSearch/>} />
     </Routes>
    </div>
  );
}

export default App;
