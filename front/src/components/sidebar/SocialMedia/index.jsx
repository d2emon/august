import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialMedia.css';

const linkMap = {
  fb: 'mdi-facebook',
  twitter: 'mdi-twitter',
  vk: 'mdi-vk',
}

function SocialMedia({ socials }) {
  return (
    <div className="connect">
      { socials.map((social) => <Button
        key={social.id}
        href={social.href}
        className="mx-1"
      >
        { linkMap[social.social] }  

      </Button>) }
     </div>
  );
}

export default SocialMedia; 
