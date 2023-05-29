import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import config from '../helpers/config';
import { fetchPage, selectPage } from '../reducers/pageSlice';

function AboutPage() {
  const {
    defaultPage,
  } = config

  const dispatch = useDispatch();
  const { pageId } = useParams();

  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchPage(pageId || defaultPage));
  }, [
    dispatch,
    defaultPage,
    pageId,
  ]);

  return ( page && <div
    className="main-page-content"
    dangerouslySetInnerHTML={{
      __html: page.html,
    }}
  /> );
}

export default AboutPage; 
