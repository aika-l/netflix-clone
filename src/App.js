import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title='Music Movies' fetchUrl={requests.fetchMusicMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='History Movies' fetchUrl={requests.fetchHistoryMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Animation" fetchUrl={requests.fetchAnimation}/>
      <Footer />
    </div>
  );
}

export default App;
