import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import config from '../helpers/config';
import { fetchPages, selectPages } from '../reducers/pageSlice';

function About() {
  const {
    defaultPage,
  } = config

  const dispatch = useDispatch();

  const pages = useSelector(selectPages);

  const links = useMemo(() => pages.filter((page) => (page.slug !== defaultPage)), [
    pages,
    defaultPage,
  ]);

  useEffect(() => {
    dispatch(fetchPages());
  }, [
    dispatch,
  ]);

  return (
    <div className="about main-page">
      <NavigationBar
        title="О нас"
        links={links}
      />

      <Outlet />
  </div>
  );
}

export default About; 
