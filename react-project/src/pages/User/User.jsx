// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const { data: user } = await axios(`https://dummyjson.com/users/${id}`);
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <img src={user?.image} alt="avatar" />
        <h1>
          {user?.firstName} {user?.lastName}{" "}
        </h1>
        <h2>{user?.address?.city}</h2>
      </div>
    </div>
  );
};

export default User;
