import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  .notification {
    margin-top: 30px;
  }

  h1 {
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #369eff;
      font-weight: bold;
      color: #333;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #333;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
  }
`;
