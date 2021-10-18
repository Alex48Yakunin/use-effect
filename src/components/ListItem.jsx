import React from "react";

export default function ListItem(props) {
  const handleClick = () => {
    props.listItemActive(props.id);
  }

  return (
    <li
      className={props.active ? 'list__item list__item_active' : 'list__item'}
      onClick={handleClick}>
      {props.children}
    </li>
  )
}