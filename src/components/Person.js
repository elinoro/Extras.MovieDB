import React from 'react';
import { connect } from "react-redux" ;
import person from '../redux/actions/person';
import { fetchPerson } from '../api/tmdbAPI';
import Carousel from './Carousel';

class Person extends React.Component {
  componentDidMount(){
    const fetch = fetchPerson();
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
  personalities: (movies) => person(movies),
}

export default connect(null, mapStateToDispatch)(Person);