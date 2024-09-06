import React from "react";

import "../styles/header.css";

import Dropdown from "../components/Dropdown";
import useLocalStorage from "../hooks/useLocalStorage";

const Header = (props: any) => {
  const { groupBy, orderBy, setGroupBy, setOrderBy } = props;
  const [displayState, setDisplayState] = useLocalStorage("displayState", null);

  const handleGroupBy = (selectedGroupBy: string) => {
    setDisplayState({ ...displayState, groupBy: selectedGroupBy });
    setGroupBy(selectedGroupBy);
  };

  const handleOrderBy = (selectedOrderBy: string) => {
    setDisplayState({ ...displayState, orderBy: selectedOrderBy });
    setOrderBy(selectedOrderBy);
  };

  return (
    <header className="app-header">
      <Dropdown
        groupBy={groupBy}
        orderBy={orderBy}
        handleGroupBy={handleGroupBy}
        handleOrderBy={handleOrderBy}
      />
    </header>
  );
};

export default Header;
