// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardItem.scss";

const CardItem = ({ user, handleDeleteUser, onUpdateUser }) => {
  // @ts-ignore
  const [editableUser, setEditableUser] = useState({});

  const handleEditUser = (user) => {
    setEditableUser((prev) => {
      if (prev.id === user.id) {
        return {};
      }
      return user;
    });
  };

  const handlEditValues = (event) => {
    setEditableUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleUpdateUser = () => {
    onUpdateUser?.(editableUser);
    setEditableUser({});
  };

  // @ts-ignore
  const renderEditableUser = () => (
    <div className="card">
      <div className="card-header">
        <img
          src={
            // @ts-ignore
            editableUser.image
          }
          width="50px"
          height="100px"
        />
        <span>
          {/* <strong>{user.firstName} </strong>
          <strong> {user.lastName} </strong> */}
          <input
            // @ts-ignore
            value={editableUser.firstName}
            name="firstName"
            // @ts-ignore
            onChange={handlEditValues}
          />
          <input
            // @ts-ignore
            value={editableUser.lastName}
            name="lastName"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <div className="card-info">
        <span>
          Phone number:{" "}
          <input
            // @ts-ignore
            value={editableUser.phone}
            name="phoneNumber"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
        <span>
          City:{" "}
          <input
            // @ts-ignore
            value={editableUser.address.city}
            name="city"
            // @ts-ignore
            onChange={handlEditValues}
          />
        </span>
      </div>
      <button
        onClick={
          // @ts-ignore
          handleUpdateUser
        }
      >
        Update User
      </button>
    </div>
  );

  const renderUser = () => (
    <div className="card" key={user.id}>
      <div className="card-header">
        <img src={user.image} width="50px" height="100px" />
        <p>
          <Link to={`user/${user.id}`}>
            <strong>
              {user.firstName} {user.lastName}{" "}
            </strong>{" "}
          </Link>
        </p>
        <p
          style={{ color: "red", cursor: "pointer", marginLeft: 2 }}
          onClick={() => handleDeleteUser(user.id)}
        >
          Delete
        </p>
      </div>
      <div className="card-info">
        <p>
          Phone number: <strong>{user?.phone}</strong>
        </p>
        <p>
          City: <strong> {user?.address?.city} </strong>
        </p>
      </div>
      <button onClick={() => handleEditUser(user)}>Edit User</button>
    </div>
  );

  return <>{editableUser.id ? renderEditableUser() : renderUser()}</>;
};

export default CardItem;
