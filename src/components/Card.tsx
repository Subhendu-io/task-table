import React from "react";
import "./../styles/card.css";

const Card = (props: any) => {
  const { ticket, users } = props;
  const userData = users.find((user: any) => user.id === ticket.userId);
  return (
    <div className="card-container">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <span>
          <img
            className="profile-image"
            src="https://lh3.googleusercontent.com/ogw/AF2bZygjLO_wfSs5iK-nK9YXYFRgu4E_gXuZslR3FIs5jSOSqhM=s64-c-mo"
            alt="Profile"
          />
          <span
            className="active-status-dot"
            style={{
              backgroundColor: userData?.available ? "#00ad36" : "#bec2c8",
            }}
          ></span>
        </span>
      </div>
      <div className="card-body">
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-footer">
        {ticket.tag.map((tag: string, index: number) => (
          <span className="feature-request" key={index}>
            <span className="status-dot"></span>
            <span>{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
