import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-around",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <NavLink className={classes.link} to="/">
          <Typography variant="h6">Home</Typography>
        </NavLink>
        <NavLink className={classes.link} to="/login">
          <Typography variant="h6">Login</Typography>
        </NavLink>
        <NavLink className={classes.link} to="/register">
          <Typography variant="h6">Register</Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
