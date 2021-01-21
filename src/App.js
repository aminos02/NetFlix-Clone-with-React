import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./request";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
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
