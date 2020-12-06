import React from 'react';
import MovieCard from './MovieCard';

const Carousel = () => {
  return(
    <div>
      <div className='carousel'>
        <img src={require('../images/left.png')} alt='left arrow' className='left arrow'/>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <img src={require('../images/right.png')} alt='right arrow' className='right arrow'/>
      </div>
    </div>
  )
}

export default Carousel;