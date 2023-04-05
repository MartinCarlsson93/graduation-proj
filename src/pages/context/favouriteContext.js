import { createContext, useReducer, useContext } from "react";

const initialState = {
  items: [],
};

const favouriteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, payload.item],
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    default:
      throw new Error("No case for that type");
  }
};

export const FavouriteContext = createContext({
  state: initialState,
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouriteReducer, initialState);

  const addToFavourites = (item) => {
    dispatch({
      type: "ADD",
      payload: { item },
    });
  };

  const removeFromFavourites = (id) => {
    dispatch({
      type: "REMOVE",
      payload: { id },
    });
  };

  const addFavourite = (item) => {
    addToFavourites(item);
  };

  const value = {
    state,
    addToFavourites,
    removeFromFavourites,
    addFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
