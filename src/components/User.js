import React from "react";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Checkbox,
} from "@material-ui/core";

export function User({ user, checkUser }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img src={user.avatar} alt={user.first_name} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        {user.first_name} {user.last_name}
        <Checkbox
          name={user.id.toString()}
          color="primary"
          onChange={(e) => checkUser(e)}
        />
      </ListItemText>
    </ListItem>
  );
}
