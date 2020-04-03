import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 999;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => {
  return (
    <StyledWrapper>
      <InnerWrapper activeColor={cardType}>
        <Heading>Hello Adrianna</Heading>

        <Paragraph>3 days ago</Paragraph>
        {cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/hello_roman" />}
        {cardType === 'article' && (
          <StyledLinkButton href="https://www.youtube.com/watch?v=U1eEkWZqoDQ" target="_blank" />
        )}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est earum ea cupiditate atque.
          In facilis quasi dolorum molestiae id, cumque ullam provident facere esse ipsum
          voluptatum, nulla iure! Mollitia, a?
        </Paragraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};
Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};
Card.defaultProps = {
  cardType: 'note',
};

export default Card;
