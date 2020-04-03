import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
`;

export default ButtonIcon;
