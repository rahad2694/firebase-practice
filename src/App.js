import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import './App.css';
import AuthenticateUser from './components/AuthenticateUser/AuthenticateUser';
import EmailPassForm from './components/EmailPassForm/EmailPassForm';
import Home from './components/Home/Home';
import Header from './Header/Header';
import Offers from './Offers/Offers';
import Orders from './Orders/Orders';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/offers' element={<Offers></Offers>}></Route>
          <Route path='/signin/emaillogin' element={<EmailPassForm></EmailPassForm>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/signin' element={<AuthenticateUser></AuthenticateUser>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;