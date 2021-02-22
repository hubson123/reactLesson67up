import React, { createContext, useState } from "react";
export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isUserAdult, setIsUserAdult] = useState(true);
  const handleToggleLoggedState = () => {
    setIsUserLogin((prevValue) => !prevValue);
  };
  const handleToggleAdultState = () =>
    setIsUserAdult((prevValue) => !prevValue);

  return (
    <>
      <AppContext.Provider
        value={{
          isUserLogin: isUserLogin,
          toggleLoggedState: handleToggleLoggedState,
        }}
      >
        {children}
      </AppContext.Provider>
      <AppContext.Provider
        value={{
          isUserLogin: isUserAdult,
          toggleLoggedState: handleToggleAdultState,
        }}
      ></AppContext.Provider>
    </>
  );
};

export default AppProvider;
