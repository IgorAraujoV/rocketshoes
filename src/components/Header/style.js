import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Cart = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  div strong {
    color: #fff;
    font-size: 16px;
    line-height: 22px;
  }

  div span {
    color: #aaa;
    margin-top: 3px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
