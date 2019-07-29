import React from 'react';
import { Grid } from 'semantic-ui-react';
import MovieThumb from './MovieThumb';
import MovieModal from './MovieModal';




const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/w500';

const MoviesList = ({ movies }) => (
  <Grid columns={4}>  
      {movies.map((movie, i) => {
        return (
            <Grid.Column key={i}>
              <MovieModal movie={movie}>
              <MovieThumb padded='vertically' image={`${IMAGE_BASE_URL}${movie.poster_path}`} />
              </MovieModal>
        </Grid.Column>
       )
     })}
  </Grid>

)

export default MoviesList;