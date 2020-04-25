import { TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    padding: "0 1rem 2rem 1rem",
  },
}));

export function Search({ method }) {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <TextField id="key" label="Search users" onChange={(e) => method(e)} />
    </div>
  );
}
