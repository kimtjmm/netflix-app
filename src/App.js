import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import request from "./api/requests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" id="HM" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" id="RM" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" id="DM" fetchUrl={request.fetchDocumentaries} />
      <Footer/>
    </div>
  );
}

export default App;
