import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breadcrumb, Button, Card, Container, ListGroup, Modal, Navbar } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditItem({
  item,
  slug,
  title,
  onLoad,
  onDelete,
  children,
}) {
  const navigate = useNavigate();
  const { id } = useParams();

  // const item = useMemo(() => (id ? data : null), [id, data]);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = useCallback(() => {
    setShowDeleteDialog(true);
  }, []);
  
  const handleCloseDeleteDialog = useCallback(() => {
    setShowDeleteDialog(false);
  }, []);

  const handleDeleteItem = useCallback(() => {
    onDelete(id);
    setShowDeleteDialog(false);    
    navigate(`/admin/${slug}`);
  }, [
    navigate,
    id,
    slug,
    onDelete,
  ]);

  const handleNavBreadcrumb = useCallback((link) => (e) => {
    e.preventDefault();
    navigate(link);
  }, [
    navigate,
  ]);
  
  const breadcrumbs = useMemo(() => ([
    {
      id: 'admin',
      title: 'Администрирование',
      href: '/admin',
      // exact: true,
      onClick: handleNavBreadcrumb('/admin'),
    },
    {
      id: 'item',
      title,
      href: `/admin/${slug}`,
      // exact: true,
      onClick: handleNavBreadcrumb(`/admin/${slug}`),
    },
    {
      id: 'edit',
      title: `${item ? item.title : 'Добавить'}`,
      href: `/admin/${slug}/${item ? item.id : 'add'}`,
      // exact: true,
      onClick: handleNavBreadcrumb(`/admin/${slug}/${item ? item.id : 'add'}`),
    },
  ]), [
    item,
    slug,
    title,
    handleNavBreadcrumb,
  ]);

  useEffect(() => {
    onLoad(id);
  }, [
    id,
    onLoad,
  ]);

  return (
    <Container>
      <Breadcrumb>
        { breadcrumbs.map((item) => <Breadcrumb.Item
          key={item.id}
          href={item.href}
          onClick={item.onClick}
        >
          {item.title}
        </Breadcrumb.Item>) }
      </Breadcrumb>

      <Modal
        show={showDeleteDialog}
        onHide={handleCloseDeleteDialog}
      >
        <Modal.Header>
          <Modal.Title>Вы действительно хотите удалить?</Modal.Title>  
        </Modal.Header>

        <Modal.Body>
          <Button
            variant="secondary"
            onClick={handleCloseDeleteDialog}
          >
            Отменить
          </Button>
          <Button
            variant="primary"
            onClick={handleDeleteItem}
          >
            Ок
          </Button>
        </Modal.Body>
      </Modal>

      <Card>
        <Card.Header>
          <Button
            variant="danger"
            onClick={handleDeleteClick}
          >
            Удалить
          </Button>
        </Card.Header>
  
        <Card.Body>
          { children }
        </Card.Body>
      </Card>
    </Container>
  );
}
  
function AdminItems({
  items,
  slug,
  title,
}) {
  const navigate = useNavigate();

  const handleNavBreadcrumb = useCallback((link) => (e) => {
    e.preventDefault();
    navigate(link);
  }, [
    navigate,
  ]);

  const handleAddItem = useCallback((e) => {
    e.preventDefault();
    navigate(`/admin/${slug}/add`);
  }, [
    navigate,
    slug,
  ]);

  const breadcrumbs = useMemo(() => ([
    {
      id: 'admin',
      title: 'Администрирование',
      href: '/admin',
      exact: true,
      onClick: handleNavBreadcrumb('/admin'),
    },
    {
      id: 'item',
      title,
      href: `/admin/${slug}`,
      exact: true,
      onClick: handleNavBreadcrumb(`/admin/${slug}`),
    },
  ]), [
    slug,
    title,
    handleNavBreadcrumb,
  ]);

  return (
    <Container>
      <Breadcrumb>
        { breadcrumbs.map((item) => <Breadcrumb.Item
          key={item.id}
          href={item.href}
          onClick={item.onClick}
        >
          {item.title}
        </Breadcrumb.Item>) }
      </Breadcrumb>

      <Card>
        <Card.Header>
          <Navbar>
            <Container>
              <Button
                href={`/admin/${slug}/add`}
                onClick={handleAddItem}
              >
                Добавить
              </Button>
            </Container>
          </Navbar>
        </Card.Header>

        <Card.Body>
          <ListGroup>
            { items.map((item) => <ListGroup.Item
              key={item.id}
              as={Link}
              to={`/admin/${slug}/${item.id}`}
            >
              { item.title }
            </ListGroup.Item>)}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

AdminItems.Edit = EditItem;

export default AdminItems; 
