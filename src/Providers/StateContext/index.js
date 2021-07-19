import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProviders = ({ children }) => {
  const [avatar, setAvatar] = useState();
  const [userName, setUserName] = useState();
  const [repository, setRepository] = useState([]);
  const [msgError, setMsgError] = useState(false);

  return (
    <StateContext.Provider
      value={{
        avatar,
        setAvatar,
        userName,
        setUserName,
        repository,
        setRepository,
        msgError,
        setMsgError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStatProviders = () => useContext(StateContext);
