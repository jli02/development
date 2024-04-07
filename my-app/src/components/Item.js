import { useState } from "react";

/**
 * function representing a single item
 * @param {*} props
 * @returns
 */
export function Item(props) {
  const { name, image, category, addToList, removeButton, altText } = props;

  return (
    <div className="item">
      <img class="image" alt={altText} src={image} />
      <h1 class="header">{name}</h1>
      <h2>{category}</h2>
      <button onClick={() => addToList(name)}>Add To List</button>
    </div>
  );
}
