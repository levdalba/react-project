// @ts-nocheck
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
  const [editableUser, setEditableUser] = useState({
    id: "",
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

  const handlEditValues = (event) => {
    setEditableUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleUpdateUser = () => {
    const indexOfEditUser = users.findIndex(
      (user) => user.id === editableUser.id
    );
    const updatedUsers = [...users];
    updatedUsers.splice(indexOfEditUser, 1, editableUser);
    // updatedUsers[indexOfeEditUser] = editableUser;
    setUsers(updatedUsers);
    setEditableUser({
      id: "",
      firstName: "",
      lastName: "",
      avatar: "",
      phoneNumber: "",
      city: "",
    });
  };

  const handleEditUser = (user) => {
    setEditableUser((prev) => {
      if (prev.id === user.id) {
        return {
          id: "",
          firstName: "",
          lastName: "",
          avatar: "",
          phoneNumber: "",
          city: "",
        };
      }
      return user;
    });
  };

  const handleAddUser = (user) => {
    const newUser = {
      ...user,
      id: Math.floor(Math.random() * 1000),
    };
    setUsers((prev) => [...prev, newUser]);
    setUser({
      firstName: "",
      lastName: "",
      avatar: "",
      phoneNumber: "",
      city: "",
    });
  };

  const renderEditableUser = (user) => (
    <div className="card" key={user.id}>
      <div className="card-header">
        <img src={editableUser.avatar} width="50px" height="100px" />
        <span>
          {/* <strong>{user.firstName} </strong> 
          <strong> {user.lastName} </strong> */}
          <input
            value={editableUser.firstName}
            name="firstName"
            onChange={handlEditValues}
          />
          <input
            value={editableUser.lastName}
            name="lastName"
            onChange={handlEditValues}
          />
        </span>
      </div>
      <div className="card-info">
        <span>
          Phone number:{" "}
          <input
            value={editableUser.phoneNumber}
            name="phoneNumber"
            onChange={handlEditValues}
          />
        </span>
        <span>
          City:{" "}
          <input
            value={editableUser.city}
            name="city"
            onChange={handlEditValues}
          />
        </span>
      </div>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );

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
            value={user.phoneNumber}
            onChange={handleValues}
          />
        </div>
        <div className="input-container">
          <label>Enter your City</label>
          <input
            placeholder="...Tbilisi"
            name="city"
            value={user.city}
            onChange={handleValues}
          />
        </div>
        <button onClick={() => handleAddUser(user)}>Add user</button>
      </div>
      <div className="flex-wrap">
        {users.map((user) => {
          if (editableUser.id === user.id) {
            return renderEditableUser(user);
          }
          return (
            <div className="card" key={user.id}>
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
              <button onClick={() => handleEditUser(user)}>Edit User</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
