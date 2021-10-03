// import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-03&sortBy=publishedAt&apiKey=4a4bfe92559c4433b3c93c02f148bec5"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {news.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {news.map((nw) => (
            <News news={nw}></News>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
