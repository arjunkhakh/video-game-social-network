import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

const Apidata1 = () => {
    
const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch('https://api.rawg.io/api/games?key=4f4b6732407f485db8cb3331c845daf6').then((response) => response.json());
    console.log(response);
    setUsers(response);
    }

  useEffect(() => {
    getApiData();
  }, []);

  // const MetaReview = async (user) => {
  //   if (user.metacritic < 0.50) {
  //     document.getElementById("metra").setAttribute("style", "background-color:red; padding:2px; border: 1px solid black; clear:both; display: inline-block; overflow: hidden;white-space: nowrap; margin:0px")
  //   } else if (user.metacritic < 0.75) {
  //     document.getElementById("metra").setAttribute("style", "background-color:yellow; padding:2px; border: 1px solid black; margin:0px; clear:both; display: inline-block; overflow: hidden;white-space: nowrap;")
  //   } else {
  //     document.getElementById("metra").setAttribute("style", "background-color:lightgreen; padding:2px; border: 1px solid black; margin:0px; clear:both; display: inline-block; overflow: hidden;white-space: nowrap;")
  //   }
  // }

  return (
    <div>
      <h1>Featured Games</h1>
        <Container>
          <Row>
          {users &&
         users.results.map((user) => (
              <Col key={user.id} xs="4">
                <Box>
                <div className="title">{user.name}</div>
              <div> <img className="homeimage" alt="the video game" src={user.background_image}></img></div>
              {/* <MetaReview> <div id="metra">{user.metacritic}</div> </MetaReview> */}
              
              </Box>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
  );
}

const Box = props => <div className="box">{props.children}</div>;

export default Apidata1