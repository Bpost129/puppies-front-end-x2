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
  const [puppies, setPuppies] = useState([])
  const navigate = useNavigate()

  const handleAddPuppy = async (formData) => {
    //service function
    setPuppies([newPuppy, ...puppies])
    navigate('/puppies')
  }

  useEffect(() => {
    const fetchPuppies = async() => {
      const puppiesData = await puppyService.index()
      console.log(puppiesData)
      setPuppies(puppiesData)
    }
    fetchPuppies()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route 
          path='/puppies' 
          element={<PuppyList puppies={puppies} />} 
        />
        <Route 
          path='/puppies/new' 
          element={<NewPuppy handleAddPuppy={handleAddPuppy} />}
        />
      </Routes>
    </>
  )
}

export default App
