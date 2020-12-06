import React from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
  return(
    <div className='header1'>
      <div>
        <Link to = '/' className='headerItem'>        
          <img src={require('../images/logo4.png')} alt='logo' className='logo'/>
        </Link>
      </div>

      <div>
        <Link to = '/search' className='headerItem'>
          <input type='text'></input>
          <img src={require('../images/search.png')} alt='search' className='searchImg'/>
        </Link>
      </div>

      <div className='sign_up_login'>
        <Link to = '/signUp' className='headerItem'>
          <span>Sign Up</span>
        </Link>

        <Link to = '/login' className='headerItem'>
          <span>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default Header1;