import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Header1 from './components/Header1';
import HomePage from './components/HomePage';
import Search from './components/Search';
import SignUp from './components/Signup';
import Login from './components/Login';

import Header2 from './components/Header2';
import MovieDetail from './components/MovieDetails';
import NowPlaying from './components/NowPlaying';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import Popular from './components/Popular';
import Recommendations from './components/Recommendations';
import Genre from './components/Genre';
import Person from './components/Person';

import './App.css';
import './normalize.css';

const App = () => {
  return(
    <div className='main__page'>
      <BrowserRouter>
        <Header1 />
        <Header2 />
        <div>
          <Route path='/' exact component={HomePage} />
          <Route path='/search' exact component={Search} />
          <Route path='/movieDetail' exact component={MovieDetail} />
          <Route path='/nowPlaying' exact component={NowPlaying} />
          <Route path='/topRated' exact component={TopRated} />
          <Route path='/upcoming' exact component={Upcoming} />
          <Route path='/genre' exact component={Genre} />
          <Route path='/popular' exact component={Popular} />
          <Route path='/recommendations' exact component={Recommendations} />
          <Route path='/person' exact component={Person} />
          <Route path='/signUp' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;