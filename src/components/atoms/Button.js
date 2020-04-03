import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;

  ${({ theme }) =>
    css`
      background-color: ${theme.primary};
      font-weight: ${theme.bold};
      font-size: ${theme.fontSize.s};
    `}

  ${({ secondary, theme }) =>
    secondary &&
    css`
      background-color: ${theme.grey200};
      font-size: ${theme.fontSize.xxs};
      width: 105px;
      height: 30px;
    `}
`;

export default Button;
