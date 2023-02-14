import './App.css';

import { Navbar } from 'react-bootstrap';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
//import FullName from './Component/Profile/FullName';
//import Address from "./Component/Profile/Address"



function App() {
  return (
    <>
     <Navbar/>
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </>
  );
}

export default App;
