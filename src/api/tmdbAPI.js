import axios from 'axios';

const apiKey = '76c3be5a646cbc1177651e80edcb2529';
const url = 'https://api.themoviedb.org/3';

const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const popularUrl = `${url}/movie/popular`;
const genreUrl = `${url}/genre/movie/list`;
const personUrl = `${url}/trending/person/week`;
const upcomingUrl = `${url}/movie/upcoming`;
const movieUrl = `${url}/movie/464052`;

// const recommendationsUrl = `${url}/movie/{movie_id}/recommendations`;



// now playing -----------------------------------------------------
export const fetchNowPlaying = () => {
  axios.get(nowPlayingUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}

// top rated -----------------------------------------------------
export const fetchTopRated = () => {
  axios.get(topRatedUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}

// // genre -----------------------------------------------------
export const fetchGenre = () => {
  axios.get(genreUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}

// // person -----------------------------------------------------
export const fetchPerson = () => {
  axios.get(personUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}

// // popular -----------------------------------------------------
export const fetchPopular = () => {
  axios.get(popularUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}

// // upcoming -----------------------------------------------------
export const fetchUpcoming = () => {
  axios.get(upcomingUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}

// random -----------------------------------------------------
export const fetchRandom = () => {
  axios.get(movieUrl, {
  params: {
    api_key: apiKey,
    language: 'en_US',
    page: 1
  }
})
.then(res => {
  console.log(res.data)
  return res.data;
})}