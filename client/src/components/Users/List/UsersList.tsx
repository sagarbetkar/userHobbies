import React from "react";
import { User } from "../../../types";
import "./UsersList.scss";

export interface IUsersListProps {
  users: User[];
  selectedUserId?: string;
  selectUser(user: User): void;
}
export const UsersList = ({ users, selectedUserId, selectUser }: IUsersListProps) => {
  const onUserSelectionChanged = (user: User) => {
    selectUser(user);
  };

  return (
    <ul className="users-list">
      {users.map((user: User) => (
        <li
          key={user._id}
          onClick={() => onUserSelectionChanged(user)}
          className={user._id === selectedUserId ? "selected" : ""}
        >
          <div>
            <h3 className="user-title"> {user.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
