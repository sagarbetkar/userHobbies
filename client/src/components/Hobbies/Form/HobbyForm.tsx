import * as React from "react";
import { useState } from "react";
import { Hobby } from "../../../types";
import './HobbyForm.scss';
interface IHobbyFormProps {
  onAdd(hobby: Hobby, userId: string): void;
  userId: string
}

const HobbyForm: React.FunctionComponent<IHobbyFormProps> = ({ onAdd, userId }) => {
  const [hobbyName, setHobbyName] = useState("");
  const [year, setYear] = useState("");
  const [passion, setPassion] = useState("");
  const [formValid, setFormValid] = useState(false);
  const addHobby = () => {
    if (!hobbyName || hobbyName.trim().length === 0) {
      setFormValid(false);
    }

    const newHobby: any = {
      name: hobbyName,
      passionLevel: passion,
      year: year
    };

    onAdd(newHobby, userId);
    resetForm();
  };

  const onHobbyNameChange = (value: string) => {
    setHobbyName(value);
    setFormValid(value.trim().length !== 0);
  };

  const resetForm = () => {
    setHobbyName("");
    setYear("");
    setPassion("");
  };

  return (
    <div className="hobby-form">
      <select
        className="passion-dropdown"
        value={passion}
        onChange={({ target: { value } }) => {
          setPassion(value);
        }}
      >
        <option value="" disabled>
          Select passion level
        </option>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
        <option value='very high'>Very High</option>
      </select>
      <input
        type="text"
        required
        className="input-hobby"
        value={hobbyName}
        placeholder="Enter user hobby"
        onChange={({ target: { value } }) => onHobbyNameChange(value)}
      />
      <input
        value={year}
        className="input-year"
        placeholder="Enter year"
        max="2019"
        type="text"
        onChange={({
          target: { value }
        }: React.ChangeEvent<HTMLInputElement>) => setYear(value)}
      />
      <button
        className="btn btn-green"
        disabled={!formValid}
        onClick={addHobby}
      >
        Add Hobby
      </button>
    </div>
  );
};

export default HobbyForm;
