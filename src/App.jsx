import './App.css'
import { CharactersList } from './components/CharactersList'

export function App() {
  

  return (
    <div className="bg-dark text-white">
      <h1 className='text-center display-1'>Rick and Morty</h1>
      <CharactersList/>
    </div>
  )
}

