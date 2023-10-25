

export const pokemonMiddleware = () => {
  return (store) => {
    return (next) => (action) => {
      //   console.log(store.getState());
      //   console.log(next);
      //   console.log(action);
      console.log(store.getState().pokemon);

    //   if (store.getState().pokemon === "error") {
        
    //     store.dispatch(setHelpTextAction("Oops, there's been an error. Try again."));
    //   }

      return next(action);
    };
  };
};
