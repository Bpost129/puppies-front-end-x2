const PuppyCard = ({ puppy }) => {
  return (
    <li>
      <h2>{puppy.name}</h2>
      <p>A {puppy.age}-year-old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard