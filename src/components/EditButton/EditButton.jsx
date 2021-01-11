import React from "react";
import {Link} from "react-router-dom";

const EditButton = (props) => {
  return <Link to={`edit/${props.id}`}>
  <button>Edit</button></Link>;
};

export default EditButton;
