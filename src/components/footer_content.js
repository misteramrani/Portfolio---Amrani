import React from 'react';
import './footer_content.scss';
import { off, settings } from '../imageimport'



function FooterContent() {
  return (
    <div className="footercontent">
<div className="footercontent_button">
<img src={off}></img>
</div>
<div className="footercontent_button">
<img src={settings}></img>
</div>
    </div>
  );
}

export default FooterContent;
