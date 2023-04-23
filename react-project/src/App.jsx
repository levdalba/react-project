import { useState } from "react";
import "./App.scss";

function App() {
  // const [avatar, setAvatar] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
    phoneNumber: "",
    city: "",
  });
  const [users, setUsers] = useState([]);

  const handleValues = (target) =>
    setUser((prev) => {
      return { ...prev, [target.name]: target.value };
    });

  const handleAddUser = (user) => {
    setUsers((prev) => [...prev, user]);
    setUser({
      firstName: "",
      lastName: "",
      avatar: "",
      phoneNumber: "",
      city: "",
    });
  };

  return (
    <>
      <div>
        <div className="input-container">
          <label>Enter your Photo URL</label>
          <input
            name="avatar"
            placeholder="...Photo"
            value={user.avatar}
            onChange={(event) => handleValues(event.target)}
          />
        </div>
        <div className="input-container">
          <label>Enter your First Name</label>
          <input
            placeholder="...John"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleValues(e.target)}
          />
        </div>
        <div className="input-container">
          <label>Enter your Last Name</label>
          <input
            placeholder="...Doe"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleValues(e.target)}
          />
        </div>
        <div className="input-container">
          <label>Enter your Phone number</label>
          <input
            placeholder="+995 555 123 456"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={(e) => handleValues(e.target)}
          />
        </div>
        <div className="input-container">
          <label>Enter your City</label>
          <input
            placeholder="...Tbilisi"
            name="city"
            value={user.city}
            onChange={(e) => handleValues(e.target)}
          />
        </div>
        <button onClick={() => handleAddUser(user)}>Add user</button>
      </div>
      <div className="flex-wrap">
        {users.map((user) => (
          <div className="card">
            <div className="card-header">
              <img src={user.avatar} width="50px" height="100px" />
              <p>
                <strong>{user.firstName} </strong>{" "}
                <strong> {user.lastName} </strong>
              </p>
            </div>
            <div className="card-info">
              <p>
                Phone number: <strong>{user.phoneNumber}</strong>
              </p>
              <p>
                City: <strong> {user.city} </strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
