import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [data, setData] = useState();
  const { beerId } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setData(response.data);
    
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className="beerList">
          <div className="beerContainer">
            <img src={data.image_url} alt="" />
            <div className="beerTextContainer">
              <h2>{data.name}</h2>
              <p>{data.tagline}</p>
              <p>{data.description}</p>
              <p>{data.attenuation_level}</p>
              <span>
                <b>Created by: </b> {data.contributed_by}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default BeerDetailsPage
