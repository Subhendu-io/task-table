import React, { useState } from "react";

import "../styles/header.css";

import DisplayIcon from "../icons/DisplayIcon";
import DownIcon from "../icons/DownIcon";

const Dropdown = (props: any) => {
  const { groupBy, orderBy, handleGroupBy, handleOrderBy } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectGroup = (e: any) => {
    handleGroupBy(e?.target?.value);
  };

  const handleSelectOrder = (e: any) => {
    handleOrderBy(e?.target?.value);
  };

  return (
    <div className="app-dropdown">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="display-dropdown"
      >
        <DisplayIcon /> <span className="display-text">Display</span>{" "}
        <DownIcon />
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="nested-menu">
            <p>Grouping</p>
            <select
              onChange={handleSelectGroup}
              className="select-box"
              name="grouping"
              id="grouping"
              value={groupBy as any}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div onChange={handleSelectOrder} className="nested-menu">
            <p>Ordering</p>
            <select
              className="select-box"
              name="ordering"
              id="ordering"
              value={orderBy as any}
            >
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
