import React from 'react';
import { connect } from "react-redux" ;
import nowPlaying from '../redux/actions/nowPlaying';
import { fetchNowPlaying } from '../api/tmdbAPI';
import Carousel from './Carousel';

class NowPlaying extends React.Component {
  componentDidMount(){
    const fetch = fetchNowPlaying();
    console.log(fetch);
  }
  render(){
    return(
      <div className='page'>
        <Carousel />
      </div>
    )
  }

};

const mapStateToDispatch = {
  nowPlayingMovies: (movies) => nowPlaying(movies),
}

export default connect(null, mapStateToDispatch)(NowPlaying);
