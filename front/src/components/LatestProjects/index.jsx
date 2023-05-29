import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LatestProjects.css';

function LatestProjects({ title, projects, links, children }) {
  return (
    <div className="latest-projects">
      <h3><span>{ title }</span></h3>
      { projects && <ul>
        { projects.map((project, projectId) => <li
          key={projectId}
        >
          <Link to={project.to}>
            <Card
              width="200px"
            >
              { project.image && <img
                src={project.image}
                alt={project.title}
                width="200px"
                height="100px"    
              /> }
              <Card.Body>
                <h5>{ project.title }</h5>
                <h6>Заказчик: { project.client }</h6>
              </Card.Body>
            </Card>
          </Link>
        </li>) }
      </ul> }
    </div>
  );
}

export default LatestProjects; 
