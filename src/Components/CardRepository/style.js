import styled from "styled-components";

export const Container = styled.div`
border-radius: 10px;
background-color: #ADACAC;
display: flex;
flex-wrap:wrap;
flex-direction:column;
justify-content: space-between;
margin: 25px auto;
padding: 5px 15px;
h2{
  margin: 0 0 10px;
}
p{
  align-items: center;
  display: flex;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  span{
    margin-left: 10px;
  }
}
@media only screen and (min-width: 769px){
flex-direction: row;
}
`;

