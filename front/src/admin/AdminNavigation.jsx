import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const menu = [
  {
    id: 1,
    title: 'Пользователи',
    to: '/admin/user',
  },
  {
    id: 2,
    title: 'Соцсети',
    to: '/admin/social',
  },
  {
    id: 3,
    title: 'Проекты',
    to: '/admin/project',
  },
  {
    id: 4,
    title: 'Услуги',
    to: '/admin/service',
  },
  {
    id: 5,
    title: 'Страницы',
    to: '/admin/wiki',
  },
  {
    id: 6,
    title: 'Категории',
    to: '/admin/category',
  },
  {
    id: 7,
    title: 'Блог',
    to: '/admin/article',
  },
  {
    id: 8,
    title: 'Рассылка',
    to: '/admin/email',
  },
];

function AdminNavigation() {
  return (
    <ListGroup>
      { menu.map((item) => <ListGroup.Item
        key={item.id}
        to={item.to}
        as={Link}
      >
        {item.title}
      </ListGroup.Item>) }
    </ListGroup>  
  );
}

export default AdminNavigation; 
