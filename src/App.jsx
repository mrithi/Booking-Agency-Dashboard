import {useState} from 'react'
import './App.css'
import {SearchBar} from './components/SearchBar/SearchBar'
import SearchResultsList from './components/SearchResultsList/SearchResultsList'

function App() {

  const [displayResults, setDisplayResults] = useState([])


  return (
    <div className='landing-page'>
      <section className='top-part'>
        Header section
        <div className='search-bar-container'>
          <SearchBar setDisplayResults={setDisplayResults} />


        </div>
      </section>
      <section className='bottom-part'>
        <div><SearchResultsList displayResults={displayResults} /></div>
      </section>
    </div>
  )
}

export default App
