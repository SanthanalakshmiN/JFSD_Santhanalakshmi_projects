import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Row, Col, CardGroup, Card, Container, CardFooter } from "react-bootstrap";
import "../Css/Main.css"
import ScaleLoader from "react-spinners/ScaleLoader";
import MyContext from "./Context";

function Movies() {
  let [Loading, setLoading] = useState("false");
  let [movielist, SetMovieList] = useState([{}]);
  let [error, setError] = useState("false")

  let data = useContext(MyContext);


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

      {Loading ? <ScaleLoader
        color={'#a83283'}
        loading={Loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> :
        <Container>
          <Row className="RowDesign">
            {movielist.filter((searchValue => {
              return data.text.toLowerCase() === '' ? searchValue :
                (searchValue.title.toLowerCase().includes(data.text))
            })).map(
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