import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WhatWeDo.css';

function WhatWeDo({ title, links, children }) {
  return (
    <div className="what-we-do">
      <h3><span>{ title }</span></h3>

      { children }

      { links && <CardGroup className="service-links">
        { links.map((link) => (
          <Link
            key={link.id}
            to={link.to}
          >
            <Card
              className="service-card"
            >
              {link.image && <img
                src={link.image}
                alt={link.title}
                height="257px"
                width="215px"
              /> }

              <Card.Body>
                <div className="service-name">
                  { link.title }
                </div>
              </Card.Body>
            </Card>
          </Link>
        )) }
      </CardGroup> }
    </div>
  );
}

export default WhatWeDo; 
