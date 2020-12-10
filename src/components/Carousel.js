import React from 'react';
import Carousel from 'react-elastic-carousel';
import MovieCard from './MovieCard';

function Carousel1() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Carousel>
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