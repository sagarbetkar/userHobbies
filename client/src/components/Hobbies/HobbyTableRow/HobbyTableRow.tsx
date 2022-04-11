import { Hobby } from "../../../types";

interface IHobbyTableRowProps {
  hobby: Hobby;
  onRemove(hobby: Hobby): void;
}

const HobbyTableRow = ({ hobby, onRemove }: IHobbyTableRowProps) => {
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
            onRemove(hobby)
          }
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default HobbyTableRow;
