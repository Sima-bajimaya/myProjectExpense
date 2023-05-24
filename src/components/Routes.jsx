import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../displayPages/Home'
import Profile from '../displayPages/Profile'
import SecureRoute from './SecureRoute'
import Loading from './Loading'
import { LoginCallback } from '@okta/okta-react';
import Expense from '../Expense/Expense'

const AppRoutes = () => {
  return (
    //this is the change for new branch check
  <Routes>

    <Route path="/" exact={true} element={<Home/>}/>
    <Route path="login/callback" element={<LoginCallback loadingElement={<Loading/>}/>}/>
    <Route path="/profile" element={<SecureRoute/>}>
      <Route path="" element={<Profile/>}></Route>
    </Route>



    <Route path="/expense" element={<Expense/>}/>
    

  </Routes>
  )
}

export default AppRoutes
