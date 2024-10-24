import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));  // Changed this line
  }, []);

  return (
    <div>
      <h3>Users:{users.length}</h3>
    </div>
  );
}


/**
 * 1.Declare a state to hold the data
 * 2.useEffect eith call back with defendency
 * 3.Use fetch to load data
 */