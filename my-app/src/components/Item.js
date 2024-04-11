import { useState } from "react";

/**
 * function representing a single item
 * @param {*} props
 * @returns
 */
export function Item(props) {
  const {
    name,
    image,
    category,
    importance,
    altText,
    toPackList,
    setToPackList,
    packItemNames,
    setPackItemNames,
  } = props;

  const addToList = (name) => {
    var copyMap = new Map(props.toPackList);
    copyMap.set(name, props.toPackList.get(name) + 1);
    setToPackList(copyMap);

    if (!props.packItemNames.includes(name)) {
      props.setPackItemNames([...props.packItemNames, name]);
    }
  };

  return (
    <div className="item">
      <img class="image" alt="cat in packing peanuts" src={image} />
      <h1 class="header">{name}</h1>
      <div class="category">
        <h2 class="body-text">{category}</h2>
      </div>
      <h2 class="body-text">level of importance: {importance}</h2>
      <button
        onClick={() => addToList(name)}
        class="button"
        aria-label="add to list button"
      >
        <h2 class="button-text">add to list</h2>
      </button>
    </div>
  );
}
