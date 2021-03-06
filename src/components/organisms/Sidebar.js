import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logo from 'assets/icons/logo.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;
const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;
const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => {
  return (
    <StyledWrapper activeColor={pageContext}>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to="/notes" exact activeclass="active" icon={penIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" activeclass="active" icon={twitterIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" activeclass="active" icon={bulbIcon} />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};
Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
