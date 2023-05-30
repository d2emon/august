import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import dateFormatter from '../../helpers/dateFormatter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats, selectStats } from '../../reducers/statsSlice';

function StatData ({ data }) {
  return (
    <Card className="my-2">
      <Card.Header>
        { data._id }
      </Card.Header>
      <Card.Body>
        { data.count }
      </Card.Body>
    </Card>    
  );
}

function StatCard ({ title, children }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}

function StatPage ({ mode }) {
  const dispatch = useDispatch();

  const stats = useSelector(selectStats);

  const [selected, setSelected] = useState(0);

  const getData = useCallback((startDate, endDate) => {
    dispatch(fetchStats({ startDate, endDate }));
  }, [dispatch]);

  const onSelect = useCallback((id, startDate, endDate) => () => {
    setSelected(id);
    getData(startDate, endDate);
  }, [getData]);

  const buttons = useMemo(() => {
    const result = [];
    if (mode === 'week') {
      const date = new Date();
      for(let i=0; i < 7; i+=1) {
        const endDate = new Date(date);
        const startDate = new Date(date);
        startDate.setDate(endDate.getDate() - 1);
        result.push(
          <ListGroup.Item
            key={i}
            active={selected === i}
            onClick={onSelect(i, startDate, endDate)}
          >
            { dateFormatter(endDate) }
          </ListGroup.Item>
        );
        date.setDate(date.getDate() - 1);
      }
    }
    if (mode === 'year') {
        let endDate = new Date();
        for(let i=0; i < 12; i+=1) {
          const startDate = new Date(endDate);
          startDate.setMonth(endDate.getMonth() - 1);
          result.push(
            <ListGroup.Item
              key={i}
              active={selected === i}
              onClick={onSelect(i, startDate, endDate)}
            >
              { dateFormatter(startDate) }
              {' - '}<br />
              { dateFormatter(endDate) }
            </ListGroup.Item>
          );
          endDate = new Date(startDate);
        }
      }
      return result;
  }, [
    mode,
    selected,
    onSelect,
  ]);

  useEffect(() => {
    setSelected(0);
    const endDate = new Date();
    let startDate = new Date(endDate);
    if (mode === 'week') {
        startDate.setDate(endDate.getDate() - 1);
    } else if (mode === 'year') {
        startDate.setMonth(endDate.getMonth() - 1);
    }
    getData(startDate, endDate);
  }, [
    mode,
    getData,
  ]);

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <ListGroup>
            { buttons }
          </ListGroup>
        </Col>
        <Col>
          {stats && <Row>
            <Col md={6}>
              <StatCard title="Посещаемость страниц">
                {stats.page && stats.page.map((item) => <StatData data={item} />)}
              </StatCard>
            </Col>

            <Col md={6}>
              <StatCard title="Посещаемость по браузерам">
                {stats.userAgent && stats.userAgent.map((item) => <StatData data={item} />)}
              </StatCard>
            </Col>

            <Col md={6}>
              <StatCard title="Источники трафика">
                {stats.referrer && stats.referrer.map((item) => <StatData data={item} />)}
              </StatCard>
            </Col>

            <Col md={6}>
              <StatCard title="Отчет по устройствам">
                {stats.isMobile && stats.isMobile.map((item) => <StatData data={item} />)}
              </StatCard>
            </Col>

            <Col md={4}>
                <StatCard title="Показатель CTR">
                    <Row>
                    <Col>
                        1
                    </Col>
                    <Col>
                        1
                    </Col>
                    </Row>
                </StatCard>
            </Col>

            <Col md={4}>
                <StatCard title="Показатель CTB">
                    <Row>
                    <Col>
                        1
                    </Col>
                    <Col>
                        1
                    </Col>
                    </Row>
                </StatCard>
            </Col>

            <Col md={4}>
                <StatCard title="Показатель CTI">
                    <Row>
                    <Col>
                        1
                    </Col>
                    <Col>
                        1
                    </Col>
                    </Row>
                </StatCard>
            </Col>
          </Row> }
        </Col>
      </Row>  
    </Container>
  );
};

export default StatPage;
