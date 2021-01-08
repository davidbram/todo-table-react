import React from "react";
import './SearchItem.css';

const SearchItem = (props) => {
  return (
    <div className="search-item">
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
