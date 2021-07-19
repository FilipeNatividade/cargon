import { useState } from "react";
import { useStatProviders } from "../../Providers/StateContext";
import GitHubIcon from "@material-ui/icons/GitHub";
import SearchIcon from "@material-ui/icons/Search";

import { Container, FirstContainer, InputContainer } from "./style";

const HeaderPage = () => {
  const { userName, setUserName } = useStatProviders();

  const [search, setSearch] = useState();

  const handleChange = () => {
    setUserName(search)
  };
  return (
    <Container>
      <GitHubIcon style={{ fontSize: "60px", color: "#dedede" }} />
      <FirstContainer>
        <InputContainer>
          <input
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search profile"
          />
          <button onClick={handleChange}>
            <SearchIcon />
          </button>
        </InputContainer>
        <h2>{userName}</h2>
      </FirstContainer>
    </Container>
  );
};

export default HeaderPage;
