import React from "react";
import List from "./List";
import { Context } from "../context/AppContext";
function ListDisplay() {
  return (
    <Context.Consumer>
      {(context) => (
        <div className="container">
          {context.lists.length
            ? context.lists.map((list, id) => (
                <List
                  key={id}
                  list={list}
                  deleteList={context.deleteFromList}
                />
              ))
            : null}
        </div>
      )}
    </Context.Consumer>
  );
}
export default ListDisplay;
