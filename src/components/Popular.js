import React from 'react';
import { connect } from "react-redux" ;
import popular from '../redux/actions/popular';
import { fetchPopular } from '../api/tmdbAPI';
import Carousel from './Carousel';

class Popular extends React.Component {
  componentDidMount(){
    const fetch = fetchPopular();
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
  popularMovies: (movies) => popular(movies),
}

export default connect(null, mapStateToDispatch)(Popular);