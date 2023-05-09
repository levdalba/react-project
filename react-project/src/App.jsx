// @ts-nocheck
import { useState, useEffect } from "react";
import "./App.scss";
import CardItem from "./components/Card";

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

  const handleValues = (event) =>
    setUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });

  const handleUpdateUser = (editedUser) => {
    const indexOfEditedUser = users.findIndex(
      (user) => user.id === editedUser.id
    );
    const updatedUsers = [...users];
    updatedUsers.splice(indexOfEditedUser, 1, editedUser);
    // updatedUsers[indexOfeEditUser] = editableUser;
    setUsers(updatedUsers);
    fetch(`https://dummyjson.com/users/${editedUser.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...editedUser,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleAddUser = (user) => {
    const newUser = {
      ...user,
      id: Math.floor(Math.random() * 1000),
    };
    setUsers((prev) => [...prev, newUser]);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = [...users].filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    fetch(`https://dummyjson.com/users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>
      <div>
        <div className="input-container">
          <label>Enter your Photo URL</label>
          <input
            name="avatar"
            placeholder="...Photo"
            value={user.avatar}
            onChange={handleValues}
          />
        </div>
        <div className="input-container">
          <label>Enter your First Name</label>
          <input
            placeholder="...John"
            name="firstName"
            value={user.firstName}
            onChange={handleValues}
          />
        </div>
        <div className="input-container">
          <label>Enter your Last Name</label>
          <input
            placeholder="...Doe"
            name="lastName"
            value={user.lastName}
            onChange={handleValues}
          />
        </div>
        <div className="input-container">
          <label>Enter your Phone number</label>
          <input
            placeholder="+995 555 123 456"
            name="phoneNumber"
            value={user.phone}
            onChange={handleValues}
          />
        </div>
        <div className="input-container">
          <label>Enter your City</label>
          <input
            placeholder="...Tbilisi"
            name="city"
            value={user?.address?.city}
            onChange={handleValues}
          />
        </div>
        <button onClick={() => handleAddUser(user)}>Add user</button>
      </div>
      <div className="flex-wrap">
        {users.map((user) => {
          // if (editableUser.id === user.id) {
          //   return renderEditableUser(user);
          // }
          return (
            <CardItem
              key={user.id}
              user={user}
              handleDeleteUser={handleDeleteUser}
              onUpdateUser={handleUpdateUser}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
