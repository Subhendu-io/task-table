import React, { useEffect, useState } from "react";

import "./../styles/board-column.css";

import { DISPLAY_GROUPS } from "../constants/ENUMS";

import ColumnTitle from "./ColumnTitle";
import Card from "./Card";

const Column = (props: any) => {
  const { groupBy, orderBy, title, tickets, users } = props;
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let dynamicTaskList = [];
    if (groupBy === "user") {
      let currentUser = users.find((user: any) => user.name === title);
      dynamicTaskList = tickets.filter(
        (ticket: any) => ticket.userId === currentUser.id
      );
    } else if (groupBy === "priority") {
      dynamicTaskList = tickets.filter(
        (ticket: any) => DISPLAY_GROUPS.priority[ticket.priority] === title
      );
    } else {
      dynamicTaskList = tickets.filter(
        (ticket: any) => ticket.status === title
      );
    }
    if (orderBy === "title") {
      setTaskList(
        dynamicTaskList.sort((a: { title: string }, b: { title: string }) =>
          a.title.localeCompare(b.title)
        )
      );
    } else {
      setTaskList(
        dynamicTaskList.sort(
          (a: { priority: number }, b: { priority: number }) =>
            a.priority > b.priority
        )
      );
    }
  }, [tickets, orderBy, users, title]);

  return (
    <div className="board-column">
      <div className="column-title">
        <ColumnTitle groupBy={groupBy} title={title} />
      </div>
      <div className="column-cards">
        {tickets &&
          taskList.map((ticket: any) => (
            <Card key={ticket.id} ticket={ticket} users={users} />
          ))}
      </div>
    </div>
  );
};

export default Column;
