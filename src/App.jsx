// npm modules
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'
import NewPuppy from './pages/NewPuppy/NewPuppy'

// components
import Nav from './components/Nav/Nav'

// css
import './App.css'

// services
import * as puppyService from './services/puppyService'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route 
          path='/puppies' 
          element={<PuppyList />} 
        />
        <Route 
          path='/puppies/new' 
          element={<NewPuppy />}
        />
      </Routes>
    </>
  )
}

export default App
