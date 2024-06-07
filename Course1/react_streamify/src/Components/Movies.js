import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Row, Col, CardGroup, Card, Container, CardFooter } from "react-bootstrap";
import "../Css/Main.css"
import ScaleLoader from "react-spinners/ScaleLoader";
import api from "../Api";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";


function Movies() {
  let [Loading, setLoading] = useState("false");
  let [movielist, SetMovieList] = useState([{}]);
  let [error, setError] = useState("false");
  let [result, setResult] = useState([{}]);

  let [text, setText] = useState("");

  let data = useSelector(gv=>gv.genres);

  let handleSearch = (event) => {

    axios.get(`${api.api_genre_url}` + text)
      .then(Response => { setResult(Response.data.results) })
      .catch(e => console.log(e))
  }

  console.log(result);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=4c9856363822bdb39f9cd73df304edfa")
      .then(Response => { SetMovieList(Response.data.results) })
      .catch(e => console.log(e))
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <div>
      <header>


        <NavDropdown title="Categories" id="nav-dropdown" className="nav">
          {
            data.map(p =>
              <NavDropdown.Item href={'/' + p.id + '/' + p.name} value={p.id}>{p.name}</NavDropdown.Item>

            )
          }
        </NavDropdown>



        <form id="form" onSubmit={handleSearch()}>




          <input type="text" id="search" placeholder="Search Movies" className="search"
            onChange={e => setText(e.target.value)} />



        </form>
      </header>
      {Loading ? <ScaleLoader
        color={'#a83283'}
        loading={Loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : text === ''?
        <Container>
          <Row className="RowDesign">
            {movielist.map(
              searchValue => <Col md="4" className="equal-height-col" key={searchValue.id}>
                <div className="ToolBox">
                  <CardGroup>

                    <Card >
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${searchValue.poster_path}`} alt="Movies" />
                      <Card.Body>
                        <Card.Title >{searchValue.title}</Card.Title>

                        <CardFooter
                          className={searchValue.vote_average >= 8 ?
                            "text-success" :
                            searchValue.vote_average >= 5 ?
                              "text-info" : "text-danger"}
                        >  Rating : {searchValue.vote_average}
                        </CardFooter>
                      </Card.Body>
                    </Card>
                  </CardGroup>

                </div>

              </Col>


            )}

          </Row>

        </Container> :
          <Container>
          <Row className="RowDesign">
            {result.map(
              searchValue => <Col md="4" className="equal-height-col" key={searchValue.id}>
                <div className="ToolBox">
                  <CardGroup>

                    <Card >
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${searchValue.poster_path}`} alt="Movies" />
                      <Card.Body>
                        <Card.Title >{searchValue.title}</Card.Title>

                        <CardFooter
                          className={searchValue.vote_average >= 8 ?
                            "text-success" :
                            searchValue.vote_average >= 5 ?
                              "text-info" : "text-danger"}
                        >  Rating : {searchValue.vote_average}
                        </CardFooter>
                      </Card.Body>
                    </Card>
                  </CardGroup>

                </div>

              </Col>


            )}

          </Row>

        </Container>
      }
    </div>
  )
}

export default Movies;