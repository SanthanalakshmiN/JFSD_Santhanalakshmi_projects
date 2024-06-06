import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, CardGroup, Card, Button, Container, CardLink, NavLink, CardFooter } from "react-bootstrap";
import "./Main.css"
import ScaleLoader from "react-spinners/ScaleLoader";


function Movies() {
  let [Loading, setLoading] = useState("false");
  let [movielist, SetMovieList] = useState([{}]);
  let [search, setSearch] = useState("");

  function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}


  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=4c9856363822bdb39f9cd73df304edfa")
      .then(Response => { SetMovieList(Response.data.results) })
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
            return search.toLowerCase() === '' ? searchValue : ( searchValue.original_title.toLowerCase().includes(search) );
          })).map(
            searchValue => <Col md="4"  className="equal-height-col" key={searchValue.id}>
              <div className="ToolBox">
                <CardGroup>

                  <Card >
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${searchValue.poster_path}`} alt="Movies" />
                    <Card.Body>
                      <Card.Title >{searchValue.original_title}</Card.Title>
                      <Card.Text>
                       Genre : 
                      </Card.Text>
                      <CardFooter
                     class = {  searchValue.vote_average >= 8 ? "text-success" : searchValue.vote_average >= 5 ? "text-info": "text-danger"}
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