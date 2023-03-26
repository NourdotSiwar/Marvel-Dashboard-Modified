import './App.css'
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from './Components/NavBar.jsx'
import Card from './Components/Card.jsx'
import List from './Components/List.jsx'

const API_KEY = import.meta.env.VITE_API_KEY;
const HASH = import.meta.env.VITE_HASH;


function App() {
    const [list, setList] = useState(null);
    const [mostComicsChar, setMostComicsChar] = useState(null);
    const [numberOfComics, setNumberOfComics] = useState(null);

    useEffect(() => {
    const fetchList = async () => {
          const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${API_KEY}&ts=1&hash=${HASH}`)
          setList(response.data)
    }
    fetchList().catch(console.error)
    }, [])

    useEffect(() => {
      const fetchMostComics = async () => {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${API_KEY}&ts=1&hash=${HASH}`)
        const characters = response.data.data.results
        const characterComics = characters.map(character => ({
          name: character.name,
          comics: character.comics.available
        }))
        characterComics.sort((a, b) => b.comics - a.comics)
        const mostComicsChar = characterComics[0].name + ": " + characterComics[0].comics + " comics"
        setMostComicsChar(mostComicsChar)
      }
    
      fetchMostComics().catch(console.error)
    }, [])
 


    useEffect(() => {
    const fetchNumberOfComics = async () => {
          const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?&apikey=${API_KEY}&ts=1&hash=${HASH}`)
          setNumberOfComics(response.data.data.total)
    }
    fetchNumberOfComics().catch(console.error)
    }, [])


  return (
    <div className="App">
      <div className='sidebarDiv'> 
      <NavBar />
      </div>

      <div className='cardDiv'>
      <Card title={"Total # of Characters: "} name={list ? list.data.total + " characters": "Loading..."} />
      <Card title={"Total # of Comics: "} name={list ? numberOfComics + " comics": "Loading..."} />
      <Card title={"Character with Most Comics: "} name={mostComicsChar ? mostComicsChar : "Loading..."
      } />
      </div>

      <div className='listDiv'>
      <List />
      </div>

    </div>
  )
}

export default App
