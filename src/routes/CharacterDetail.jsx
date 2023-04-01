import React, {Component, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const HASH = import.meta.env.VITE_HASH;

const CharacterDetail = () => {

      let params = useParams();
      const [fullDetails, setFullDetails] = useState(null);

     useEffect(() => {

            const id = params.id.replace(':', '');
            const getCharDetails = async () => {
                  try {
                    const id = params.id.replace(':', ''); 
                    const details = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${API_KEY}&ts=1&hash=${HASH}`)
                    console.log(details.data);
                    setFullDetails(details.data.data.results[0])
                  } catch (error) {
                    console.log(error)
                  }
                }
                  getCharDetails().catch(console.error);
      }, [])
                      

      return (
            <div>
                  <h1>Character Details</h1>
                  <div className="charDetails">
                        <h1>{ fullDetails && fullDetails.name }</h1>
                        <img src={ fullDetails && fullDetails.thumbnail.path + '.' + fullDetails.thumbnail.extension } alt={ fullDetails && fullDetails.name } />

                        <h2>Description</h2>   
                        <p>{ fullDetails && fullDetails.description ? fullDetails.description: "No description provided for this character" }</p>

                        <h2>Comics</h2>
                        <ul className='centered'>
                              { fullDetails && fullDetails.comics.items.length === 0 ? <li>No comics available for this character</li> : null}
                              { fullDetails && fullDetails.comics.items.map((comic, index) => {
                                    return <li key={index}>{comic.name}</li>
                              })}
                        </ul>

                        <h2>Series</h2>
                        <ul className='centered'>
                        { fullDetails && fullDetails.series.items.length === 0 ? <li>No series available for this character</li> : null}
                              { fullDetails && fullDetails.series.items.map((series, index) => {
                                    return <li key={index}>{series.name}</li>
                              })}
                        </ul>

                        <h2>Stories</h2>
                        <ul className='centered'>
                        { fullDetails && fullDetails.stories.items.length === 0 ? <li>No stories available for this character</li> : null}
                              { fullDetails && fullDetails.stories.items.map((story, index) => {
                                    return <li key={index}>{story.name}</li>
                              })}
                        </ul>

                        <h2>Events</h2>
                        <ul className='centered'>
                        { fullDetails && fullDetails.events.items.length === 0 ? <li>No events available for this character</li> : null}
                              { fullDetails && fullDetails.events.items.map((event, index) => {
                                    return <li key={index}>{event.name}</li>
                              })}
                        </ul>
                  </div>     
            </div>
      )
}

export default CharacterDetail;