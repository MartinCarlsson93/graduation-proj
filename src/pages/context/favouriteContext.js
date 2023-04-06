import React, { createContext, useReducer } from "react";

export const FavouriteContext = createContext({
  items: [],
});

const favouriteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, payload.favourites],
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (currentFavourite) => currentFavourite.id !== payload.id
        ),
      };
    default:
      return state;
  }
};

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouriteReducer, { items: [] });

  const addToFavourites = (favourites) => {
    dispatch({
      type: "ADD",
      payload: {
        favourites,
      },
    });
  };

  const removeFromFavourites = (id) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id,
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
