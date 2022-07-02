import React, { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Featured Games</h1>
      {users &&
        users.results.map((user) => (
          <div key={user.id} className="item-container">
            Id:{user.id}<div className="title">Title:{user.name}</div>
            <div> <img className="homeimage" alt="the video game" src={user.background_image}></img></div>
          </div>
        ))}
    </div>
  );
}

export default Apidata1