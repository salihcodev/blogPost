import React, { useReducer } from 'react';

export default (contextReducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    // extract dispatch actions and inject them into boundActions OBJ:
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  // export two new context, provider to use them in elegant way.
  return { Context, Provider };
};
