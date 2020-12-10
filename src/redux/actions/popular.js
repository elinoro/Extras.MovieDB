export default function popular(movies){
  return{
    type: 'FETCH_POPULAR',
    payload: movies
  }
}