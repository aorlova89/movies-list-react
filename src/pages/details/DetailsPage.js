import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import service from "../../services/search";
import {Header, Img, MovieInfo, Container, Details, Overview, StyledLink, Title} from './DetailsStyles';


export const DetailsPage = () => {
    const movieID = useParams().id;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        service.getMovieByID(movieID)
            .then(e => setMovie(e))
    }, []);

    return (
        <>
            <Header>
                <StyledLink to={`/`}>Back to Movies Catalog</StyledLink>
            </Header>
            <Container>
                <div className="movie-image">
                    <Img src={movie.poster_path}/>
                </div>
                <MovieInfo>
                    <Title>{movie.title}</Title>
                    <Details>
                        <div className="year">{movie.release_date}</div>
                        <div className="length">{movie["runtime"]} min</div>
                        <div className="genre">{movie.genres}</div>
                    </Details>
                    <Overview>{movie.overview}</Overview>
                </MovieInfo>
            </Container>

        </>
    );
}


