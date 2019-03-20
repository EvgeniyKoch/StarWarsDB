import React from 'react';
import { Redirect } from 'react-router-dom';

import './iframe-style.css';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <div className="iframe-style">
          <iframe
            title="secret video"
            src="https://www.youtube.com/embed/WMjkfBzGE2c"
            frameborder="0"
            allowfullscreen
          >
          </iframe>
        </div> 
      </div>
    );
  }
  return <Redirect to="/login" /> ;
};

export default SecretPage;
