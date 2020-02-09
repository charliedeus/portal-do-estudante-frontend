import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #333;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;

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
