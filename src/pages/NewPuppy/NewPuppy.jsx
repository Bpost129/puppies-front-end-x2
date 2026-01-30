// npm modules
import { useState } from "react"

// css
import './NewPuppy.css'

const NewPuppy = ({ handleAddPuppy }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    breed: '',
    color: 'Grey',
    ears: 'Button'
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleAddPuppy(formData)
  }

  return (
    <main className="new">
      <h1>NEW PUPPY</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input 
          required
          type="text" 
          name="name"
          id="name-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="age-input">Age</label>
        <input 
          required
          min="0"
          type="number" 
          name="age"
          id="age-input"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed-input">Breed</label>
        <input 
          required
          type="text" 
          name="breed"
          id="breed-input"
          placeholder="Breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <label htmlFor="color-input">Color</label>
        <select 
          required 
          name="color" 
          id="color-input"
          value={formData.color}
          onChange={handleChange}  
        >
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="White">White</option>
          <option value="Golden">Golden</option>
        </select>
        <label htmlFor="ears-input">Ears</label>
        <select 
          required 
          name="ears" 
          id="ears-input"
          value={formData.ears}
          onChange={handleChange}
        >
          <option value="Button">Button</option>
          <option value="Drop">Drop</option>
          <option value="Pointy">Pointy</option>
        </select>

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewPuppy