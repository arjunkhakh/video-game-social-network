import { useEffect, useState } from "react";

const Details = () => {

const [details, setDetails] = useState();

const getDetailData = async () => {

    const response2 = await fetch (`https://api.rawg.io/api/games/${this.results.id}?key=4f4b6732407f485db8cb3331c845daf6`).then((response2) => response2.json());
    console.log(response2);
    setDetails(response2)
    }

    useEffect(() => {
        getDetailData();
      }, []);

      return (
        <div>
            
        </div>
      )
}

export default Details