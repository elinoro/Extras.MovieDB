import React from 'react';
import { connect } from "react-redux" ;
import nowPlaying from '../redux/actions/nowPlaying';
import Carousel from './Carousel';

const NowPlaying = () => {
  return(
    <div className='page'>
      <Carousel />
    </div>
  )
};

const mapStateToDispatch = {
  nowPlayingMovies: (movies) => nowPlaying(movies),
}

export default connect(null, mapStateToDispatch)(NowPlaying);
