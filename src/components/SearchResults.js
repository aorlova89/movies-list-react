import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getMovies} from "../store/movies/thunk";
import {SearchResultsDiv, MovieHeader, MovieItem, MovieYear, Img} from './SearchPageStyles'

export const SearchResults = () => {

    const movies = useSelector( state => state.movies);

    const dispatch = useDispatch();
    useEffect(() => dispatch(getMovies()), []);

    return (
        <SearchResultsDiv>
            {movies.map (movie => (
                <MovieItem to={`/movie/${movie.id}`}>
                    <Img src={movie.poster_path}/>
                    <MovieHeader>
                        <span className="movie-main-name">{movie.title}</span>
                    </MovieHeader>
                    <div className="movie-details">
                        <MovieYear>{movie["release_date"]}</MovieYear>
                    </div>
                </MovieItem>
            ))}
        </SearchResultsDiv>
    );
}
