import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    border: 0;
    border-radius: 4px;
    height: 42px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #FFF;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 220px;
      background-size: cover;
      border-radius: 4px;
    }

    div {
      display: flex;
      justify-content: space-between;

      button {
        border: 0;
        border-radius: 2px;
        width: 100px;
        height: 42px;
        padding: 0 15px;
        font-size: 16px;
        font-weight: bold;
        background: #f05a5b;
        color: #fff;
        cursor: pointer;
      }
    }

    strong {
      margin-top: 10px;
      font-size: 24px;
      color: #444;
    }

    span {
      font-size: 20px;
      color: #999;
    }

  }
`;