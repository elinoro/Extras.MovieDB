import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
  return(
    <div className='header2'>

      <Link to = '/nowPlaying' className='headerItem default'>
        <span>Now Playing</span>
      </Link>

      <Link to = '/topRated' className='headerItem'>
        <span>Top Rated</span>
      </Link>

      <Link to = '/upcoming' className='headerItem'>
        <span>Upcoming</span>
      </Link>

      <Link to = '/popular' className='headerItem'>
        <span>Popular</span>
      </Link>

    </div>
  )
}

export default Header2;