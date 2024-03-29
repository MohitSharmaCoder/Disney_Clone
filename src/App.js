import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <>
    <div className="app">
        <Router>
          <Header/>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/details/:id' element={<Detail/>}/>
            </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;