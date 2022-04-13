import React from "react";
import { Hobby } from "../../../types";
import HobbyTableRow from "../HobbyTableRow/HobbyTableRow";
import "./HobbiesTable.scss";

export interface IHobbiesTableProps {
  hobbies: Hobby[];
  userId: string;
  onRemove(id: string, userId: string): void;
}

const HobbiesTable = ({ hobbies, onRemove, userId }: IHobbiesTableProps) => {
 
  const removeHobby = (hobby: Hobby, userId:string) => {
    onRemove(hobby._id, userId);
  };

  return (
    <table>
      <colgroup>
        <col width="30%" />
        <col width="45%" />
        <col width="15%" />
        <col width="10%" />
      </colgroup>
      <tbody>
        {hobbies.map(hobby => (
          <HobbyTableRow key={hobby._id} hobby={hobby} userId={userId} onRemove={removeHobby} />
        ))}
      </tbody>
    </table>
  );
};

export default HobbiesTable;
