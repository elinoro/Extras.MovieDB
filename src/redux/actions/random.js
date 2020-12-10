export default function random(movies){
  return{
    type: 'FETCH_RANDOM',
    payload: movies
  }
}