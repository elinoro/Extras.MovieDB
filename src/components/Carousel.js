import React from 'react';
import Carousel from 'react-elastic-carousel';
import MovieCard from './MovieCard';

function Carousel1() {

  const breakPoints = [
    // { width: 1, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    // { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 4 }
  ];

  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        <MovieCard>1</MovieCard>
        <MovieCard>2</MovieCard>
        <MovieCard>3</MovieCard>
        <MovieCard>4</MovieCard>
        <MovieCard>5</MovieCard>
        <MovieCard>6</MovieCard>
        <MovieCard>7</MovieCard>
        <MovieCard>8</MovieCard>
      </Carousel>
    </div>
  );
}

export default Carousel1;