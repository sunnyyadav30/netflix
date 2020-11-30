import React from 'react';
import './App.css';
import Row from './Components/Row/Row'
import request from './request'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL = {request.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchURL = {request.fetchTrending} />
      <Row title="Top Rated" fetchURL = {request.fetchTopRated} />
      <Row title="Action Movies" fetchURL = {request.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL = {request.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchURL = {request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL = {request.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL = {request.fetchDocumentries} />
      <Footer />
    </div>
  );
}

export default App;
