import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;

    img {
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      flex: 1;
      color: #191919;
    }

    > span {
      font-weight: bold;
      margin-top: 5px;
      margin-bottom: 20px;
      font-size: 20px;
    }

    button {
      display: flex;
      align-items: center;
      background: #7159c1;
      margin-top: auto 0;
      padding-right: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7169c1')};
      }

      div {
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;

        span {
          color: #fff;
        }

        svg {
          margin-right: 4px;
        }
      }

      span {
        flex: 1;
        align-self: center;
        padding: 1px;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
