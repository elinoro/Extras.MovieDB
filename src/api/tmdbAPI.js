// import React from 'react';
import axios from 'axios';
// import { connect } from "react-redux" ;
// import nowPlaying from '../redux/actions/nowPlaying';

const apiKey = '76c3be5a646cbc1177651e80edcb2529';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
// const movieUrl = `${url}/movie/+{movie_id}`;
const genreUrl = `${url}/genre/movie/list`;
const personUrl = `${url}/trending/person/week`;
const upcomingUrl = `${url}/movie/upcoming`;
// const recommendationsUrl = `${url}/movie/{movie_id}/recommendations`;
const populargUrl = `${url}/movie/popular`;

// class NowPlayingTMDB extends React.Component {
//   componentDidMount(){

// now playing -----------------------------------------------------
export const fetchNowPlaying = axios.get(nowPlayingUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return this.props.nowPlayingMovies(res.data)
})
console.log(fetchNowPlaying)
    
  // }

//   render(){
//     return(
//      <div><p>blahblah</p></div>
//     )
//   }
// };

// const mapStateToDispatch = {
//   nowPlayingMovies: (movies) => nowPlaying(movies),
// }

// export default connect (null, mapStateToDispatch)(NowPlayingTMDB);

// top rated -----------------------------------------------------
export const fetchTopRated = axios.get(topRatedUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
 return this.props.topRatedMovies(res.data)
})
console.log(fetchTopRated)

// genre -----------------------------------------------------
export const fetchGenre = axios.get(genreUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
 return this.props.genreMovies(res.data)
})
console.log(fetchGenre)

// person -----------------------------------------------------
export const fetchPerson = axios.get(personUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
 return this.props.person(res.data)
})
console.log(fetchPerson)