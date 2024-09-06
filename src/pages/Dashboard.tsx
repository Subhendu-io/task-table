import React, { useEffect, useState } from "react";

import { _get } from "../services/api";
import useLocalStorage from "../hooks/useLocalStorage";

import Header from "../layouts/Header";
import Board from "../layouts/Board";
import { apis } from "../constants/API";

const Dashboard = () => {
  const [orderBy, setOrderBy] = useState("title");
  const [groupBy, setGroupBy] = useState("status");
  const [users, setUsers] = useState();
  const [tickets, setTickets] = useState();
  const [displayState, setDisplayState] = useLocalStorage("displayState", {
    orderBy: "title",
    groupBy: "status",
  });

  const updateDisplayState = () => {
    if (displayState?.groupBy) {
      setGroupBy(displayState.groupBy);
    }
    if (displayState?.orderBy) {
      setOrderBy(displayState.orderBy);
    }
  };

  useEffect(() => {
    _get(apis.internal)
      .then((response) => {
        if (response["tickets"] && response["users"]) {
          setUsers(response["users"]);
          setTickets(response["tickets"]);
          setDisplayState({
            groupBy: displayState?.groupBy || "status",
            orderBy: displayState?.orderBy || "title",
          });
          updateDisplayState();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <Header
        groupBy={groupBy}
        orderBy={orderBy}
        setGroupBy={setGroupBy}
        setOrderBy={setOrderBy}
      />
      {displayState && users && tickets && (
        <Board
          users={users}
          tickets={tickets}
          groupBy={groupBy}
          orderBy={orderBy}
        />
      )}
    </main>
  );
};

export default Dashboard;
