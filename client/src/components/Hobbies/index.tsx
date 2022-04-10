import React from "react";
import { Hobby } from "../../types";
import HobbyForm from "./Form/HobbyForm";
import HobbiesTable from "./Table/HobbiesTable";
import './Hobbies.scss';

interface HobbiesProps {
  hobbies: Hobby[];
  userId: string;
  onAdd(hobby: Hobby, userId: string): void;
  onRemove(id: string): void;
}

const Hobbies = ({ hobbies, userId, onAdd, onRemove }: HobbiesProps) => {
  const addHobby = (hobby: Hobby, userId: string) => {
    if (hobbies.find(h => h.name.toLowerCase() === hobby.name.toLowerCase())) {
      alert("Hobby already exists");
      return;
    }

    onAdd(hobby, userId);
  };

  return (
    <>
      <HobbyForm onAdd={addHobby} userId={userId}/>
      <div className="hobby-list">
        {hobbies.length === 0 ? (
          "No hobbies"
        ) : (
          <HobbiesTable onRemove={onRemove} hobbies={hobbies} />
        )}
      </div>
    </>
  );
};
export default Hobbies;
