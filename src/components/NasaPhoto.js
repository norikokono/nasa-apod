// https://www.better.dev/make-a-stellar-react-nasa-app-in-10-minutes
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

// https://www.geeksforgeeks.org/how-to-create-instagram-like-button-in-reactjs/
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
    <NavBar />
    <div className="nasa-photo">
      {photoData.media_type === "image" ? (
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    
    {/* Like Button */}
      <div style={{
        // margin: 'auto',
        marginTop: '30rem',
        display: 'block',
        width: 'fit-content'
      }}>
        
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />}
            name="checkedH" />}
            label="Like"
        />
      </div>
    </div>
    </>
  );
}