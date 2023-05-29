import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../../helpers/config';
import { addEmail } from '../../../reducers/emailSlice';
import { fetchSocials, selectSocials } from '../../../reducers/socialSlice';
import FeedbackForm from '../FeedbackForm';
import Logo from '../Logo';
import NavMenu from '../NavMenu';
import SocialMedia from '../SocialMedia';
import './NavSidebar.css';

function NavSidebar() {
  const {
    author,
    navigation,
    title,
  } = config;

  const dispatch = useDispatch();
  const socials = useSelector(selectSocials);

  const handleSubmitFeedback = useCallback((email) => {
    dispatch(addEmail({ email }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSocials());
  }, [dispatch]);

  return (
    <div className="sidebar">
      <Logo id="logo" title={title} />
      <NavMenu navigation={navigation} />
      <FeedbackForm onSubmit={handleSubmitFeedback} />
      <SocialMedia socials={socials} />
      <div className="copyright">Автор сайта: { author }</div>
    </div>
  );
}

export default NavSidebar; 
