import React from 'react'
import Login from '../src/Components/Login/Login'
import Register from './Components/Register/Register'
import AuthUser from './context/AuthUser'
import Finance from './Finance'
import {Routes,Route} from 'react-router-dom'

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Login/>
  }

  return (
    <div className='App'>
    <Routes>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='/' element= {<Login/>}/>
      <Route path='/register' element= {<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;