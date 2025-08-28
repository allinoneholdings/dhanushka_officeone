import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login/LoginPage'
import BranchPage from './pages/BranchPage'
import PackagePage from './pages/PackagePage'
import Register from './pages/Login/Register'
import SingleBranch from './pages/SingleBranch'
import SinglePackage from './pages/SinglePackage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<LoginPage/>} />

        <Route path='/packages' element={<PackagePage/>} />
        <Route path='/packages/:id' element={<SinglePackage/>} />
        
        <Route path='/branch' element={<BranchPage/>} />
        <Route path='/branch/:id' element={<SingleBranch/>} />
        

      </Routes>
    </div>
  )
}

export default App