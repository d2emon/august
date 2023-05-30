import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const menu = [
  {
    id: 1,
    title: 'За неделю',
    to: '/admin/stats/week',
  },
  {
    id: 2,
    title: 'За год',
    to: '/admin/stats/year',
  },
];

function StatsNavigation() {
  return (
    <Card className="my-2">
      <Card.Header>
        <Card.Title>Статистика</Card.Title>
      </Card.Header>
      <ListGroup>
        { menu.map((item) => <ListGroup.Item
          key={item.id}
          to={item.to}
          as={Link}
        >
          {item.title}
        </ListGroup.Item>) }
      </ListGroup>  
    </Card>
  );
}

export default StatsNavigation; 
