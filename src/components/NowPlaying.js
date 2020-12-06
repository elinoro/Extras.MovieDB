import React from 'react';
import { connect } from "react-redux" ;
import nowPlaying from '../redux/actions/nowPlaying';

class NowPlaying extends React.Component {
  componentDidMount(){
    
  }

  render(){
    return(
     <div><p>blahblah</p></div>
    )
  }
};

const mapStateToDispatch = {
  nowPlayingMovies: (movies) => nowPlaying(movies),
}

export default connect(null, mapStateToDispatch)(NowPlaying);
