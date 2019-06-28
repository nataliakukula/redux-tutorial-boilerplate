export default function (state=null, action){
  // this reducer (state changer) takes in default state
  // if there was a change made to the state
  // the action returns the payload (new data) -> state
  // eslint-disable-next-line default-case
  switch(action.type){
    case "USER_SELECTED":
      return action.payload;
  }
  return state;
}