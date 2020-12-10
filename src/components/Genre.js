import React from 'react';
import { connect } from "react-redux" ;
import genre from '../redux/actions/genre';
import { fetchGenre } from '../api/tmdbAPI';
import Carousel from './Carousel';

class Genre extends React.Component {
  componentDidMount(){
    const fetch = fetchGenre();
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
  genres: (movies) => genre(movies),
}

export default connect(null, mapStateToDispatch)(Genre);