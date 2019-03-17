import React from 'react';
import { Redirect } from 'react-router-dom';

import './iframe-style.css';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <div className="flexis">
          <iframe
             src="https://www.youtube.com/embed/WMjkfBzGE2c"
             frameborder="0"
             allowfullscreen>
          </iframe>
        </div> 
      </div>
    );
  }
  return <Redirect to="/login" /> ;
};

export default SecretPage;
// < iframe width = "560"
// height = "315"
// src = "https://www.youtube.com/embed/WMjkfBzGE2c"
// frameborder = "0"
// allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// allowfullscreen > < /iframe>