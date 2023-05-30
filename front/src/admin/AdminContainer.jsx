import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import config from '../helpers/config';
import { checkToken, getToken, selectAdminUser, selectIsAuth } from '../reducers/authSlice';
import Main from '../views/Main';
import AdminNavigation from './AdminNavigation';
import LoginModal from './LoginModal';
import StatsNavigation from './StatsNavigation';

function AdminContainer() {
  const {
    title,
  } = config;

  const dispatch = useDispatch();

  const adminUser = useSelector(selectAdminUser);
  const isAuth = useSelector(selectIsAuth);

  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = useCallback((data) => {
    dispatch(getToken(data));
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  useEffect(() => {
    setShowLogin(!adminUser);
  }, [adminUser]);

  useEffect(() => {
    if (isAuth) {
      dispatch(checkToken());
    }
  }, [
    dispatch,
    isAuth,
  ]);

  return (
    <Main>
      <div id="app">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/admin/home">
              {title} - Панель управления
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
              { adminUser && <Button>
                {adminUser.username}
              </Button>}  
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <LoginModal
          show={showLogin}
          onSubmit={handleLogin}
        />

        <Container>
          <Row>
            <Col md={2}>
              <Container className="m-2">
                <StatsNavigation />

                <AdminNavigation />
              </Container>
            </Col>

            <Col>
              <Container className="m-2">
                <Outlet />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </Main>
  );
}

export default AdminContainer; 
