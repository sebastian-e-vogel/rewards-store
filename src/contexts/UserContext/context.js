import React from "react";
import api from "../api";

const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const [status, setStatus] = React.useState("pending");
  const [addPointsStatus, setAddPointsStatus] = React.useState();
  const [redeemStatus, setRedeemStatus] = React.useState();

  async function handleRedeem(product) {
    setRedeemStatus("pending");

    if (!user) return;

    const result = await api.redeem(product._id).then((result) => {
      setUser({ ...user, points: user.points - product.cost });
      setRedeemStatus("resolved");
      if (result.ok) return true;
      return false;
    });

    return result;
  }

  async function handleAddPoints(amount) {
    setAddPointsStatus("pending");
    if (!user) return;

    const result = await api.points.add(amount).then((result) => {
      setUser({ ...user, points: user.points + amount });
      setAddPointsStatus("resolved");
      if (result.ok) return true;
      return false;
    });
    return result;
  }

  React.useEffect(() => {
    api.fetch().then((user) => {
      setUser(user);
      setStatus("resolved");
    });
  }, []);

  if (!user || status === "pending") {
    return <div>loading...</div>;
  }

  const state = {
    user,
    addPointsStatus,
    redeemStatus,
  };
  const actions = {
    addPoints: handleAddPoints,
    redeem: handleRedeem,
  };

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
