import React from "react";

const SearchItem = (props) => {
  return (
    <div>
      <label htmlFor="searchTask">Search: </label>
      <input
        type="text"
        onChange={props.editSearchTask}
        value={props.searchTask}
        placeholder="Search tasks"
      />
    </div>
  );
};

export default SearchItem;
