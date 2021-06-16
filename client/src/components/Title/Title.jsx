import { useState, useEffect } from 'react';
import axios from 'axios';

import './Title.css';

function Title(props) {

  return (
    <div className="title-div">
      <h1>{props.titleText}</h1>
    </div>
  );
}

export default Title;
