import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import store from "../../store";
import { logiActions } from "../../store/loginSlice";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [values, setValues] = useState({ email: "", password: "" });

  useEffect(() => {
    axios
      .get(
        "https://register-login-96cee-default-rtdb.firebaseio.com/register.json"
      )
      .then((res) => {
        console.log("Fetched Data:", res.data);
        setData([res.data]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData({});
      });
  }, []);

  const handleSubmit = () => {
    console.log("User Input:", values);
    const users = Object.values(data || {});
    console.log("All Users:", users);

    const user = data.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (user) {
      console.log("Login successful!");
      //   store.dispatch(logiActions.logiIn());
      navigate("/");
    } else {
      console.log("Login failed: Invalid email or password");
      alert("Email yoki parol noto‘g‘ri!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        marginLeft: "490px",
        marginTop: "100px",
        gap: "20px",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>
      <TextField
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography variant="subtitle1" gutterBottom>
          You don't have account?
        </Typography>
        <NavLink
          style={{
            textDecoration: "none",
            fontFamily: "sans-serif",
            color: "blue",
          }}
          to={"/register"}
        >
          Register
        </NavLink>
      </Box>
    </Box>
  );
}
