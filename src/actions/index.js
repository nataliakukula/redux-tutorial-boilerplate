export const selectUser = (user) => {
  // our action takes the data [we passed in that was changed] and returs it with a type
  console.log("You clicked on user", user.first);

  return {
      type: "USER_SELECTED",
      payload: user
  }
};