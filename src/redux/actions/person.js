export default function person(movies){
  return{
    type: 'FETCH_PERSON',
    payload: movies
  }
}