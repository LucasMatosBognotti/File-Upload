import styled from 'styled-components';

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #FFF;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label#thumbnail {
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    height: 160px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      display: none;
    }
  }

  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;

    span {
      font-weight: normal;
      color: #999;
      font-size: 12px;
    }
  }

  input {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }

  button {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    cursor: pointer;

    :hover {
      background: #e14f50;
    }
  }

`;