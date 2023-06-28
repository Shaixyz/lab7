import './App.css';
import { Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard'
import Detail from './components/Detail'
import Add from './components/Add'
import Edit from './components/Edit';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import TopNews from './components/TopNews';
import Main from './components/Main';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/news" element={<TopNews/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
        <Route path='/add' element={<Protected><Add/></Protected>}></Route>
        <Route path=':id/edit' element={<Protected><Edit/></Protected>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
