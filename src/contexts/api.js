const endpoint = "https://coding-challenge-api.aerolab.co";
const header = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
};
export default {
  fetch: async () => {
    const userResult = await fetch(endpoint + "/user/me", { headers: header });
    const user = await userResult.json();
    return user;
  },
  points: {
    add: async (amount) => {
      const result = await fetch(endpoint + "/user/points", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ amount }),
        headers: { ...header, Accept: "application/json" },
      });
      return result;
    },
  },
  redeem: async (productId) => {
    const redeemResult = await fetch(endpoint + "/redeem", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ productId }),
      headers: { ...header, Accept: "application/json" },
    });
    return redeemResult;
  },
  list: async () => {
    const productsResult = await fetch(endpoint + "/products", {
      headers: header,
    });
    const products = await productsResult.json();
    return products;
  },
};
