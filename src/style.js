import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px;
  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    @media only screen and (min-width: 769px) {
      height: 200px;
      width: 200px;
    }
  }
`;

export const RepositoryContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 769px) {
    margin-top: 100px;
    width: 70%;
  }
`;

export const ErrorContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #adacac;
  display: flex;
  justify-content: center;
  margin: 25px;
  padding: 25px;
  h2{
    text-align: center;
  }
`;
