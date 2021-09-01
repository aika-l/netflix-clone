import React, {useState, useEffect} from 'react';
import axios from './axios'
import requests from './requests';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // a snipped of code which runs based on a specific condition/variable

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //console.log(request); to virify if it returned anything back
            setMovies(request.data.results)
            return request;
        }
        fetchData()
        // if [], run once when the row loads. and don't run again (only on page load)
    }, [fetchUrl])
        // if [movies] it runs once and every time movies changes

    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {/* container -> poster */}
                {movies.map(movie => (
                    <img 
                        className='row_poster' 
                        key={movie.id}
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row