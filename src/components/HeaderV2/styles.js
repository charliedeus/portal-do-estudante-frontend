import styled from 'styled-components';

export const Container = styled.div``;

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
      /* color: rgba(228, 241, 254, 1); */

      a {
        display: block;
        margin-top: 2px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  img {
    height: 28px;
    width: 28px;
    border-radius: 50%;
  }
`;
