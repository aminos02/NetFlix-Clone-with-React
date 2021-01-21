import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        url={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" url={requests.fetchTrending} />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action Movies" url={requests.fetchActionMovies} />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Documentaries" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
