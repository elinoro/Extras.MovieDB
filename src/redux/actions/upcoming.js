export default function upcoming(movies){
  return{
    type: 'FETCH_UPCOMING',
    payload: movies
  }
}