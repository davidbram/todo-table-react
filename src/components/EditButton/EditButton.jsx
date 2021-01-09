import React from "react";
import {Link} from "react-router-dom";

const EditButton = (props) => {
  const editItem = () => {

  }
  return <Link to={`edit/${props.id}`}>
  <button onClick={editItem}>Edit</button></Link>;
};

export default EditButton;
