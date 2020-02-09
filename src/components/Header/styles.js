import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: none;
`;

export const StyledLink = styled(Link)`
  color: rgba(228, 241, 254, 1);
  text-decoration: none;
  background: transparent !important;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: rgba(228, 241, 254, 1);
    text-decoration: none;
    background: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #333;
  align-items: center;
  justify-content: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: rgba(228, 241, 254, 1);

      a {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  img {
    border-radius: 50%;
  }
`;
