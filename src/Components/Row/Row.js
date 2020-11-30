import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Row.scss';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseURL = 'https://image.tmdb.org/t/p/original/'

function Row({title, fetchURL, isLargeRow}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(()=>{ 
        async function fetchData(){
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
        }
        fetchData()
    },[fetchURL])

    const opts = {
        height: '390px',
        width: '100%',
        playerVars : {
            autoplay: 1
        }
    }

    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }

    console.log(movies)
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movies.map(movie=>(
                        <img onClick={() => handleClick(movie)} key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row