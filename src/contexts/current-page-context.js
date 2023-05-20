import React, { useState } from "react";

const CurrentPageContext = React.createContext({
  activePage: "home",
  onPageChange: (page) => {},
});

export const CurrentPageContextProvider = (props) => {
  //hold the acivePage
  const [activePage, setActivePage] = useState("home");

  function handleClick(page) {
    setActivePage(page);
  }
  return (
    <CurrentPageContext.Provider
      value={{ activePage: activePage, onPageChange: handleClick }}
    >
      {props.children}
    </CurrentPageContext.Provider>
  );
};
export default CurrentPageContext;
