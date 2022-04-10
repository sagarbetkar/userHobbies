import React from "react";
import { Hobby } from "../../../types";

interface IHobbyTableRowProps {
  hobby: Hobby;
  onRemove(hobby: Hobby): void;
}

const HobbyTableRow = ({ hobby, onRemove }: IHobbyTableRowProps) => {
  return (
    <tr>
      <td>
        {hobby.passionLevel}
      </td>
      <td>
        {hobby.name}
      </td>
      <td>{"Since " + hobby.year}</td>
      <td>
        <button
          onClick={() =>
            window.confirm("Are you sure you wish to delete the hobby?") &&
            onRemove(hobby)
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default HobbyTableRow;
