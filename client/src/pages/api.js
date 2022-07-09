import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

const Apidata1 = () => {
    
const [users, setUsers] = useState();
// const [details, setDetails] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch('https://api.rawg.io/api/games?key=4f4b6732407f485db8cb3331c845daf6').then((response) => response.json());
    console.log(response);
    setUsers(response);

    // const getDetailData = await fetch (`https://api.rawg.io/api/games/${response.results.id}?key=4f4b6732407f485db8cb3331c845daf6`).then((response2) => response2.json());
    // console.log(getDetailData);
    // setDetails(getDetailData)
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>Featured Games</h1>
        <Container>
          <Row>
          {users &&
         users.results.map((user) => (
              <Col xs="3">
                <Box>
                <div className="title">{user.name}</div>
              <div> <img className="homeimage" alt="the video game" src={user.background_image}></img></div>
              <br></br>
              <div style={{backgroundColor: user.metracritic < 50 ? "red" : "green", border: "1px solid black", color: "black", width:"4vw", height:"3vw", left:"40%", position: "relative", borderRadius:"100%", fontSize:"155%"}}> {user.metacritic} </div>
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