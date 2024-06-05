import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, CardGroup, Card, Button, Container, CardLink, NavLink } from "react-bootstrap";
import "./Main.css"
import ScaleLoader from "react-spinners/ScaleLoader";


function Movies() {
  let [Loading, setLoading] = useState("false");
  let [movielist, SetMovieList] = useState([{}]);
  let [search, setSearch] = useState("");


  useEffect(() => {
    axios.get("https://dummyapi.online/api/movies/")
      .then(results => { SetMovieList(results.data) })
      .catch(e => console.log(e))
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      },2000);
  }, [])
 
  return (
    <div>
      <h2> Movies Api </h2>
      <br />
      <form  onChange={(e) => setSearch(e.target.value)}>
        
        <div class="d-flex justify-content-center">

          <div class="col-auto">
 <input type="text" class="form-control" id="search" placeholder="Search Movies" />
          </div>
          

        </div>
      </form>
    { Loading ?  <ScaleLoader
        color={'#a83283'}
        loading={Loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> :
      <Container>
        <Row class="RowDesign">
          {movielist.filter((searchValue => {
            return search.toLowerCase() === '' ? searchValue : ( searchValue.movie.toLowerCase().includes(search) );
          })).map(
            searchValue => <Col md="4" key={searchValue.id}>
              <div className="ToolBox">
                <CardGroup>

                  <Card>
                    <Card.Body>
                      <Card.Title>{searchValue.movie}</Card.Title>
                      <Card.Text>
                        <span> Card Rating {searchValue.rating} </span>
                      </Card.Text>
                      <CardLink href={searchValue.imdb_url} target="blank">
                        Click Here to check IMDB
                      </CardLink>
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