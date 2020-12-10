import React from 'react';
import { connect } from "react-redux" ;
import random from '../redux/actions/random';
import { fetchRandom } from '../api/tmdbAPI';
import Carousel from './Carousel';

class HomePage extends React.Component {
  componentDidMount(){
    const fetch = fetchRandom();
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
  randomMovies: (movies) => random(movies),
}

export default connect(null, mapStateToDispatch)(HomePage);