import React, { createContext, useState } from 'react';
export const Context = createContext();
const AppContext = ({ children }) => {
  const [lists, setLists] = useState([]);
  const removeList = (item) => {
    let newLists = [...lists];

    lists.map((list, id) => {
      return list === item && newLists.splice(id, 1);
    });
    setLists(newLists);
  };
  return (
    <Context.Provider
      value={{
        lists,
        addToLists: (newItem) => setLists([...lists, newItem]),
        deleteFromList: (item) => removeList(item),
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;