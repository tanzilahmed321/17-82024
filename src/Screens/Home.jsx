import React, { useEffect, useState } from "react";

import axios from "axios";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "./components/Tables";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);

  return (
    <Box>
      <Button
        onClick={() => navigate("/createUser")}
        sx={{ marginBottom: 5, float: "right", marginTop: 3 }}
        variant="contained"
      >
        Create new User
      </Button>
      <Table data={userData} />
    </Box>
  );
};

export default Home;