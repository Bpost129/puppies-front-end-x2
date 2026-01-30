// css
import './PuppyList.css'

// components
import PuppyCard from '../../components/PuppyCard/PuppyCard'

const PuppyList = ({ puppies, handleRemovePuppy }) => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>
      {!puppies.length && <h2>Oops! No puppies here!</h2>}
      <ul>
        {puppies.map(puppy => 
          <PuppyCard key={puppy._id} puppy={puppy} handleRemovePuppy={handleRemovePuppy} />
        )}
      </ul>
    </main>
  )
}

export default PuppyList