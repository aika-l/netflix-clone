import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from './axios'
import "./Row.css";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    // a snipped of code which runs based on a specific condition/variable

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //console.log(request); //to virify if it returned anything back
            setMovies(request.data.results)
            return request;
        }
        fetchData()
        // if [], run once when the row loads. and don't run again (only on page load)
    }, [fetchUrl])
        // if [movies] it runs once and every time movies changes

        const opts = {
            height: "390",
            width: '100%',
            playerVars: {
                autoplay: 1,
            }
        }
    

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || "")
            .then((url) => {
              
                //https://www.youtube.com/watch?v=0zvSZhTeFgM
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error))
        }
    }
    console.log('m', movies)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
               
                {movies.map(
                    (movie) => 
                        // (isLargeRow && movie.poster_path)  || 
                        // (!isLargeRow && movie.backdrop_path && (
                            <img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                        //))
                    
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
