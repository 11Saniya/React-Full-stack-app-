import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Log from './components/login';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Error from './components/Error';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Log />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
