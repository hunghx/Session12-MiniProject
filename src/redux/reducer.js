const initState = {
  listMovie: [],
  search: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GETALL":
        // console.log("get all lisst movie");
      state = { ...state, listMovie: action.payload };
      return state;
    case "SEARCH":
        console.log(action.payload);
        state = {...state,search:action.payload}
      return state;
      case "ADD":
        state={...state,listMovie:[...state.listMovie,action.payload]}
        return state;
      case "DELETE":
        let newList = state.listMovie.filter((item)=>item.id!=action.payload);
        state ={...state,listMovie:[...newList]}
        return state;
    default:
        console.log("default-------");
      return state;
  }
};
export default reducer;
