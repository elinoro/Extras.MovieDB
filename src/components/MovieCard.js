import React from 'react';
import Rating from './Rating';

const MovieCard = () =>{
  return(
    <div className='movie__card'>
      <div className='movie_card_rating'>
        <Rating />
      </div>
      <img src={require('../images/moviePoster.jpg')} alt='poster' className='poster'/>
      <div className='movie_card_bottom'>
        <div className='movie_card_text'>
          <span className='movie_title'>Movie Title</span>
          <span className='release_date'>2020</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;