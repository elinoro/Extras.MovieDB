export default function topRated(movies){
  return{
    type: 'FETCH_TOP_RATED',
    payload: movies
  }
}
