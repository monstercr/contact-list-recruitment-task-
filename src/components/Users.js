import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../api/users";
import { CircularProgress, List, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Search } from "./Search";
import { User } from "./User";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: "40px 0",
    maxHeight: 600,
    overflowY: "auto",
    maxWidth: 350,
  },
  loader: {
    margin: "0 1rem 1rem 1rem",
  },
  button: {
    marginLeft: "1rem",
    marginTop: "2rem",
  },
}));

export function Users() {
  const { error, data, success, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [checkedUsers, setCheckedUser] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    success && setUsers(data.slice(0, 10));
  }, [data, success]);

  useEffect(() => {
    console.log(checkedUsers);
  }, [checkedUsers]);

  const loadMore = () => {
    setUsers(
      users.concat([...users], data.slice(users.length - 1, users.length + 10))
    );
  };

  const searchResults = (e) => {
    const value = e.target.value.toLowerCase();

    setUsers(
      value.length > 0
        ? data.filter(
            (item) =>
              item.first_name.toLowerCase().includes(value) ||
              item.last_name.toLowerCase().includes(value)
          )
        : data.slice(0, 20)
    );
  };

  const toggleCheckedUser = (e) => {
    const id = Number(e.target.getAttribute("name"));
    setCheckedUser(
      checkedUsers.includes(id)
        ? checkedUsers.filter((item) => item !== id)
        : [...checkedUsers, id]
    );
  };

  const classes = useStyles();

  return (
    <>
      <Search method={searchResults} />
      {loading === "pending" && <CircularProgress className={classes.loader} />}
      {success && (
        <List className={classes.list}>
          {users.length > 0 ? (
            <>
              {users.map((user, index) => (
                <User
                  checkUser={(e) => toggleCheckedUser(e)}
                  user={user}
                  key={index}
                />
              ))}
              <Button
                onClick={loadMore}
                variant="contained"
                className={classes.button}
              >
                Load more
              </Button>
            </>
          ) : (
            <Alert severity="error">No search results for this term :(</Alert>
          )}
        </List>
      )}
      {error && (
        <Alert severity="error">Something went wrong, please try again!</Alert>
      )}
    </>
  );
}
