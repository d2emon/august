import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LatestProjects from '../components/LatestProjects';
import WhatWeDo from '../components/WhatWeDo';
import config from '../helpers/config';
import { fetchPage, selectPage } from '../reducers/pageSlice';
import { fetchLatestProjects, selectProjects } from '../reducers/projectSlice';
import { fetchServices, selectServices } from '../reducers/serviceSlice';

function Home() {
  const {
    defaultPage,
  } = config

  const dispatch = useDispatch();

  const page = useSelector(selectPage);
  const projects = useSelector(selectProjects);
  const services = useSelector(selectServices);

  useEffect(() => {
    dispatch(fetchServices());
    dispatch(fetchLatestProjects());
    dispatch(fetchPage(defaultPage));
  }, [
    dispatch,
    defaultPage,
  ]);

  return (
    <div className="home main-page">
      { page && <div
        className="main-page-content"
        dangerouslySetInnerHTML={{
          __html: page.html,
        }}
      /> }  

      <WhatWeDo
        title="Что Мы Делаем"
        links={services}
      />

      <LatestProjects
        title="Последние проекты"
        projects={projects}
      />
  </div>
  );
}

export default Home; 
