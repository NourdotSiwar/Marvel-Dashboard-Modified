import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const HASH = import.meta.env.VITE_HASH;

const List = ( ) => {
      const [list, setList] = useState(null);

      useEffect(() => {
      const fetchList = async () => {
            const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${API_KEY}&ts=1&hash=${HASH}`)
            setList(response.data)
      }
      fetchList().catch(console.error)
      }, [])

     // const [searchInput, setSearchInput] = useState('')
   //   const [filteredResults, setFilteredResults] = useState([])
/*
      const searchItems = (searchValue) => {
            setSearchInput(searchValue)

            if(searchValue !== '') {
                  const filteredData = Object.keys(list.Data).filter((item) => Object.values(item)
                  .join('')
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
                  )

                  setFilteredResults(filteredData)
            } else {
                  setFilteredResults(Object.eys(list.Data))
            }
      }*/

      return(

      <div className="list">
           {/*} <input type="text" placeholder="Search" onChange={(inputString) => searchItems(inputString.target.value)} />*/}

            <ul>
            <li className="titleList"><h3>Image</h3><h3>Name</h3>
            <h3>Comics</h3></li>
            { list ? list.data.results.map((item) => {
                  return (
                        <li className="charList" key={item.id}>
                              <div className="imageDiv">
                              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
                              </div>
                              <div className="nameDiv">
                              <h3>{item.name}</h3>
                              </div>
                              <div className="comicsDiv">
                              {item.comics.items.map((comic) => {
                              return (
                              <li className="comicList" key={comic.name}>
                                    <h4>{comic.name}</h4>
                              </li>
                              )
                              })}
                              </div>
                        </li>
                  )
            }
            ) : ( <p>Loading...</p>
            )}
            </ul>
      </div>
      )
}

export default List;