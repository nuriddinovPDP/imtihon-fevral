import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import store from "../../store";
import { logiActions } from "../../store/loginSlice";
// import store from "../../store";
// import { logiActions } from "../../store/loginSlice";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);
  const navigate = useNavigate();
  const handleSubmit = () => {
    axios
      .put(
        "https://register-login-96cee-default-rtdb.firebaseio.com/register.json",
        {
          email: values.email,
          password: values.password,
        }
      )
      .then((res) => {
        console.log(res.data);
        // store.dispatch(logiActions.logiIn());
        navigate("/");
      });
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
        Register
      </Typography>
      <TextField
        onChange={(e) =>
          setValues({
            ...values,
            email: e.target.value,
          })
        }
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={(e) =>
          setValues({
            ...values,
            password: e.target.value,
          })
        }
        id="outlined-basic"
        label="Password"
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
          to={"/login"}
        >
          Login
        </NavLink>
      </Box>
    </Box>
  );
}
