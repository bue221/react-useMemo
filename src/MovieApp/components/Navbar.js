import React, { useContext } from "react";

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const { user, login, logout } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {user ? `Hola ${user.name}` : "Bienvenid@"}
          </Typography>
          {user ? (
            <Button color="inherit" onClick={logout}>
              Cerrar sesión
            </Button>
          ) : (
            <Button color="inherit" onClick={login}>
              Iniciar sesión
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
