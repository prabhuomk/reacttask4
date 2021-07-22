import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";

export function Data() {
  const [users, setUsers] = useState([]);

  function loadUsers() {
    fetch("https://60c83c0fafc88600179f6657.mockapi.io/users", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setUsers(result));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="user-list">
      {users.map((data) => (
        <User
          pic={data.pic}
          name={data.name}
          joinyear={data.joinyear}
          id={data.id}
        />
      ))}
    </div>
  );
}
function User({ pic, name, joinyear, id }) {
  const history = useHistory();

  return (
    <div className="userpage">
      <Card
        onClick={() => history.push(`/edituser/${id}`)}
        style={{
          width: "300px",
          margin: "10px",

          backgroundColor: "#F4ABAA",
          cursor: "pointer"
        }}
      >
        <img className="user-avatar" src={pic} alt="notfound" />
        <h4>{name}</h4>
        <span>{joinyear}</span>
      </Card>
    </div>
  );
}
