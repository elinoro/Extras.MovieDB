import React from 'react';
import { connect } from "react-redux" ;
import topRated from '../redux/actions/topRated';
import { fetchTopRated } from '../api/tmdbAPI';
import Carousel from './Carousel';

class TopRated extends React.Component {
  componentDidMount(){
    const fetch = fetchTopRated();
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
  topRatedMovies: (movies) => topRated(movies),
}

export default connect(null, mapStateToDispatch)(TopRated);