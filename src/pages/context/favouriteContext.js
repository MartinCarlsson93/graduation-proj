import { createContext, useReducer } from "react";

export const FavouriteContext = createContext({
  items: [],
});

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouriteReducer, { items: [] });

  const addToFavourites = (favourites) => {
    const updatedFavourites = [...state.items, favourites];

    dispatch({
      type: "ADD",
      payload: {
        items: updatedFavourites,
      },
    });
  };

  const removeFromFavourites = (id) => {
    const updatedFavourites = state.items.filter(
      (currentFavourites) => currentFavourites.id !== id
    );

    dispatch({
      type: "REMOVE",
      payload: {
        items: updatedFavourites,
      },
    });
  };

  const value = {
    items: state.items,
    addToFavourites,
    removeFromFavourites,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

const favouriteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        items: payload.items,
      };
    case "REMOVE":
      return {
        ...state,
        items: payload.items,
      };
    default:
      throw new Error("No case for that type");
  }
};
