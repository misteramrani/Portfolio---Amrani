import React from 'react';
import './loading.scss';
import { logo } from '../imageimport'



function Loading() {
  return (
    <div className="loading">

<div className="loading_container"><img className="loading_container_logo" src={logo} alt="amrani_webdevelopment_photo_screen"></img>
</div>
    </div>
  );
}

export default Loading;
