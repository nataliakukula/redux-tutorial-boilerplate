export default function (state=null, action){
  // eslint-disable-next-line default-case
  switch(action.type){
    case "USER_SELECTED":
      return action.payload;
  }
  return state;
}