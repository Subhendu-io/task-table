import React, { useEffect, useState } from "react";

import "./../styles/board-container.css";

import { DISPLAY_GROUPS } from "../constants/ENUMS";

import Column from "../components/Column";
import useLocalStorage from "../hooks/useLocalStorage";

const Board = (props: any) => {
  const { users, tickets, groupBy, orderBy } = props;
  const [displayState] = useLocalStorage("displayState", null);
  const [displayColumns, setDisplayColumns] = useState<string[]>([]);

  useEffect(() => {
    if (displayState && groupBy) {
      if (users && groupBy === "user") {
        const userColumns = users.map((user: any) => user.name);
        setDisplayColumns(userColumns);
      } else if (groupBy === "priority") {
        setDisplayColumns(DISPLAY_GROUPS.priority);
      } else {
        setDisplayColumns(DISPLAY_GROUPS.status);
      }
    }
  }, [groupBy]);

  return (
    <section className="app-board">
      <div className="board-container">
        {displayColumns &&
          displayColumns.map((displayColumn) => (
            <Column
              groupBy={groupBy}
              orderBy={orderBy}
              tickets={tickets}
              title={displayColumn.toString()}
              users={users}
            />
          ))}
      </div>
    </section>
  );
};

export default Board;
