import React from "react";
import store from "../../store";
import { logiActions } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function PrivatePage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginLeft: "581px",
        marginTop: "200px",
      }}
    >
      <Typography>PrivatePage</Typography>
      <Button
        onClick={() => {
          //   store.dispatch(=]);
          navigate("/login");
        }}
      >
        logout
      </Button>
    </Box>
  );
}
