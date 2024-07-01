import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    /* If you would run this function isEditing will not go from true to false, as it might seem.
        Because of React scheduling, both of these lines will think that isEditing was false,
        so both lines will do the same. React will only run the handleEditClick function
            setIsEditing(!isEditing); => true
            setIsEditing(!isEditing); => true
        But if you use a function in the setIsEditing twice, it will be first true and then false.
        Because when you run it as a function, React will run them both inside the handleEditClick function.
            setIsEditing((editing) => !editing); => true
            setIsEditing((editing) => !editing); => false
    */
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        className="player-name"
        type="text"
        required
        onChange={handleChange}
        value={playerName}
      />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
