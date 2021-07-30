import * as C from './visit.constant'

const initialState = {
  list: [],
  selected: {},
};

export const visitReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.SELECT: 
      return {
        ...state,
        selected: action.place
      }

    case C.INIT_LIST: 
      return {
        ...state,
        list: action.list
      }

    case C.CHANGE_STATUS:
      return {
        selected: {},
        list: state.list.map((item) => {
          return item.location === state.selected.location 
            ? ({
              ...item,
              visited: !item.visited
            })  
            : item
        })
      }
      
    default:
      return state;
  }
};
