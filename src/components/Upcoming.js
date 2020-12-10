import React from 'react';
import { connect } from "react-redux" ;
import upcoming from '../redux/actions/upcoming';
import { fetchUpcoming } from '../api/tmdbAPI';
import Carousel from './Carousel';

class Upcoming extends React.Component {
  componentDidMount(){
    const fetch = fetchUpcoming();
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
  upcomingMovies: (movies) => upcoming(movies),
}

export default connect(null, mapStateToDispatch)(Upcoming);