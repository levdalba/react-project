// @ts-nocheck
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/user/:id" element={<User />} />
    </Routes>
  );
}

export default App;
