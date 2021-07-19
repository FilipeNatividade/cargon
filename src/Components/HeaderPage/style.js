import styled from "styled-components";

export const Container = styled.header`
  align-items: center;
  background-color: #2d333b;
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
`;
export const FirstContainer = styled.div`
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h2 {
    color: #dedede;
    margin: 15px 0 0;
  }
`;
export const InputContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  input {
    border-radius: 5px;
    border: 1px solid #dedede;
    box-sizing: border-box;
    background-color: #22272e;
    color: #dedede;
    height: 30px;
    outline: none;
    padding: 0 10px;
    width: 180px;
  }
  button {
    align-items: center;
    background-color: #dedede;
    border-radius: 5px;
    display: flex;
    height: 30px;
    justify-content: center;
    margin-left: 10px;
    width: 30px;
  }
`;
