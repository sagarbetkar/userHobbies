import { Hobby } from "../../../types";

interface IHobbyTableRowProps {
  hobby: Hobby;
  userId: string;
  onRemove(hobby: Hobby, userId: string): void;
}

const HobbyTableRow = ({ hobby, onRemove, userId }: IHobbyTableRowProps) => {
  return (
    <tr>
      <td>
        Passion: {hobby.passionLevel}
      </td>
      <td>
        <h3>{hobby.name}</h3>
      </td>
      <td style={{textAlign: 'end'}}>{"Since " + hobby.year}</td>
      <td>
        <button
          onClick={() =>
            window.confirm("Are you sure you wish to delete the hobby?") &&
            onRemove(hobby, userId)
          }
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default HobbyTableRow;
