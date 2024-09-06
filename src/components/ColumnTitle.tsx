import React from "react";

import "./../styles/board-column.css";

import AddIcon from "../icons/AddIcon";
import MenuIcon from "../icons/MenuIcon";
import ToDoIcon from "../icons/ToDoIcon";
import DoneIcon from "../icons/DoneIcon";
import BacklogIcon from "../icons/BacklogIcon";
import CancelledIcon from "../icons/CancelledIcon";
import NoPriorityIcon from "../icons/NoPriorityIcon";
import InProgressIcon from "../icons/InProgressIcon";
import LowPriorityIcon from "../icons/LowPriorityIcon";
import HighPriorityIcon from "../icons/HighPriorityIcon";
import MediumPriorityIcon from "../icons/MediumPriorityIcon";
import UrgentPriorityColorIcon from "../icons/UrgentPriorityColourIcon";

const ColumnTitle = (props: any) => {
  const { title, groupBy } = props;

  const TitleIcon = () => {
    switch (title) {
      case "Backlog":
        return <BacklogIcon />;
      case "Todo":
        return <ToDoIcon />;
      case "In progress":
        return <InProgressIcon />;
      case "Done":
        return <DoneIcon />;
      case "Canceled":
        return <CancelledIcon />;
      case "No priority":
        return <NoPriorityIcon />;
      case "Low":
        return <LowPriorityIcon />;
      case "Medium":
        return <MediumPriorityIcon />;
      case "High":
        return <HighPriorityIcon />;
      case "Urgent":
        return <UrgentPriorityColorIcon />;
      default:
        return <BacklogIcon />;
    }
  };

  return (
    <div className="column-title-wrapper">
      <div className="column-title-icon">
        {groupBy === "user" ? (
          <img
            className="title-profile-image"
            src="https://lh3.googleusercontent.com/ogw/AF2bZygjLO_wfSs5iK-nK9YXYFRgu4E_gXuZslR3FIs5jSOSqhM=s64-c-mo"
            alt="Profile"
          />
        ) : (
          <TitleIcon />
        )}
      </div>
      <div className="column-title-text">
        <h4>{title}</h4>
      </div>
      <div className="column-title-icon">
        <AddIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default ColumnTitle;
