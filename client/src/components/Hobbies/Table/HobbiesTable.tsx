import React from "react";
import { Hobby } from "../../../types";
import HobbyTableRow from "../HobbyTableRow/HobbyTableRow";
import "./HobbiesTable.scss";

export interface IHobbiesTableProps {
  hobbies: Hobby[];
  onRemove(id: string): void;
}

const HobbiesTable = ({ hobbies, onRemove }: IHobbiesTableProps) => {
 
  const removeHobby = (hobby: Hobby) => {
    onRemove(hobby._id);
  };

  return (
    <table>
      <colgroup>
        <col width="25%" />
        <col width="45%" />
        <col width="25%" />
        <col width="5%" />
      </colgroup>
      <tbody>
        {hobbies.map(hobby => (
          <HobbyTableRow key={hobby._id} hobby={hobby} onRemove={removeHobby} />
        ))}
      </tbody>
    </table>
  );
};

export default HobbiesTable;
