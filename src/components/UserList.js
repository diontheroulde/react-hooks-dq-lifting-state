import React from "react";
import UserCard from "./UserCard";

function UserList(props) {
  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => console.log("u clicked the user")}
          {...user}
          onHandleChange={props.onHandleChange}
        />
      ))}
    </div>
  );
}

export default UserList;
