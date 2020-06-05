import React, { useState, useEffect } from "react";
import { User } from "../api/user";
import { Container } from "semantic-ui-react";

export const UsersIndexPage = () => {
  let [userIndex, setUserIndex] = useState({
    users: [],
  });

  useEffect(() => {
    User.index().then((response) => {
      setUserIndex({ users: response.users });
    });
  }, []);
  return (
    <Container className="project-index">
      <div>
        <h1>All users</h1>
        <ul>
          {userIndex.users.map((user) => (
            <li key={user.id}>
              {/*<Link to={`/users/${user.id}`}>{user.name}</Link>*/}
              {user.name}
              {user.email}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
