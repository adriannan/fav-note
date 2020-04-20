import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar';
import PlusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;
const StyledGrid = styled.div`
  padding: 25ps 150px 25px 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;
const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  border-radius: 50px;
  background-size: 30%;
  z-index: 10000;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarVisible = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <>
        <UserPageTemplate>
          <StyledWrapper>
            <StyledPageHeader>
              <Input search placeholder="search" />
              <StyledHeading big as="h1">
                {pageContext}
              </StyledHeading>
              <StyledParagraph>6 {pageContext}</StyledParagraph>
            </StyledPageHeader>
            <StyledGrid>{children}</StyledGrid>
            <StyledButtonIcon
              icon={PlusIcon}
              activeColor={pageContext}
              onClick={this.handleNewItemBarVisible}
            />
            <NewItemBar isVisible={isNewItemBarVisible} />
          </StyledWrapper>
        </UserPageTemplate>
      </>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
