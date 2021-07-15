import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(0)


  const handleChange= (id) => {
    setCurrentUser(id - 1)
  }



  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onHandleChange={handleChange} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={users[currentUser]} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
