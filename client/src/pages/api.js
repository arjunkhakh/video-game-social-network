import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

const Apidata1 = () => {
    
const [users, setUsers] = useState();
const [details, setDetails] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch('https://api.rawg.io/api/games?key=4f4b6732407f485db8cb3331c845daf6').then((response) => response.json());
    console.log(response);
    setUsers(response);

    // for (let index = 0; index < response.results.length; index++) {
    //   const getDetailData = await fetch (`https://api.rawg.io/api/games/${response.results[index].id}?key=4f4b6732407f485db8cb3331c845daf6`).then((response2) => response2.json());
    //   console.log(getDetailData);
    //   setDetails([getDetailData])
    // }

    const getDetailData = await response.results.map((detail) => {
      const getGameData = fetch (`https://api.rawg.io/api/games/${detail.id}?key=4f4b6732407f485db8cb3331c845daf6`).then((response2) => response2.json());
      console.log(getGameData);

      return getGameData;
    })

    const promise = await Promise.all(getDetailData).then(function(data) {
      console.log(data);
      
      return data;
      });
      console.log(promise)
      
      // promise.forEach(element => {
      //   console.log(element)
      //   setDetails([element])
      // });

      // for (let index = 0; index < promise.length; index++) {
      //   const element = promise[index];
      //   setDetails([element])
      // }

      promise.map(function(element) {
        setDetails([element])
        return element
      })
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
                  <div key={user.id}>
                <div className="title">{user.name}</div>
              <div> <img className="homeimage" alt="the video game" src={user.background_image}></img></div>
              <br></br>
              <div style={{backgroundColor: user.metracritic < 50 ? "red" : "green", border: "1px solid black", color: "black", width:"4vw", height:"3vw", left:"40%", position: "relative", borderRadius:"100%", fontSize:"155%"}}> {user.metacritic} </div>
              {details && details.map((detail) => (
                <div key={user.id}>
                  {detail.description_raw}
                  </div>
              ))}
              </div>
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