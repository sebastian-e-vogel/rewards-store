import React from "react";

import { UserContext } from "./context";

export function usePoints() {
  const {
    state: { user, addPointsStatus },
    actions: { addPoints },
  } = React.useContext(UserContext);

  return [user.points, addPoints, addPointsStatus];
}

export function useUser() {
  const {
    state: { user },
  } = React.useContext(UserContext);

  return user;
}

export function useRedeem() {
  const {
    actions: { redeem },
  } = React.useContext(UserContext);

  return redeem;
}
