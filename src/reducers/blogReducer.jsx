const blogState = [];
// REDUCER
export const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];
      case "EDIT_BLOG":
        return state.map(b=>{
          if (b.id === action.id) {
              return{
                ...b,
                ...action.edited
              }
          }else{
            return b;
          }
        })
   case "REMOVE_BLOG":
    return state.filter(({id})=>{
      return id !== action.id
    })
    case "SET_BLOGS":
            return action.blogs;
   
    default:
      break;
  }
};