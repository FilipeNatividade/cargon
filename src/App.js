import { useStatProviders } from "./Providers/StateContext";
import HeaderPage from "./Components/HeaderPage";
import CardRepository from "./Components/CardRepository";

import { Container, RepositoryContainer, ErrorContainer } from "./style";
import { useEffect } from "react";
import Api from "./Api";

const App = () => {
  const {
    userName,
    avatar,
    setAvatar,
    repository,
    setRepository,
    msgError,
    setMsgError,
  } = useStatProviders();

  useEffect(() => {
    Api.get(`/users/${userName}/repos`)
      .then((response) => {
        console.log(response.data);
        setRepository(response.data);
        setAvatar(response.data[0].owner.avatar_url);
        setMsgError(false);
      })
      .catch((error) => {
        setMsgError(true);
      });
  }, [userName, setMsgError, setAvatar, setRepository]);

  return (
    <>
      <HeaderPage />
      {msgError === false ? (
        <Container>
          {avatar && <img src={avatar} alt="avatar profile" />}

          <RepositoryContainer>
            {repository.map((intem, index) => (
              <CardRepository
                key={index}
                nameRepository={intem.name}
                starRepository={intem.stargazers_count}
              />
            ))}
          </RepositoryContainer>
        </Container>
      ) : (
        <ErrorContainer>
          <h2>Search for an existing profile</h2>
        </ErrorContainer>
      )}
    </>
  );
};

export default App;
