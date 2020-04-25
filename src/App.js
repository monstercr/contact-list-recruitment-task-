import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Users } from "./components/Users";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Users />
      </Grid>
    </Grid>
  );
}

export default App;
