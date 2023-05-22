import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavigationBar = () => {
  return (
    <div>
      <nav></nav>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Applications with Forge So Far
          </Typography>
          <Button color="inherit">
            <Link to="/app1">Trivia App</Link>
          </Button>
          <Button color="inherit">
            <Link to="/app2">Weather App</Link>
          </Button>
          <Button color="inherit">
            <Link to="/app3">News App</Link>
          </Button>
          <Button color="inherit">
            <Link to="/app4">Tic App</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
