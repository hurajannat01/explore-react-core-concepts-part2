import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(10);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemove = () => {
    setTeam(team - 1);
  };

  const teamStyle = {
    border: '2px solid yellow', // Valid color
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
  };

  return (
    <div style={teamStyle}>
      <h3>Player Count: {team}</h3> {/* Display the team count */}
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
