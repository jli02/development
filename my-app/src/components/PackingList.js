import { itemMap } from "../App.js";

/**
 * function representing aggregator where items are added
 * @param {*} props
 * @returns
 */
export function PackingList(props) {
  const { toPackList, setToPackList, packItemNames, setPackItemNames } = props;

  const removeItem = (item, index) => {
    const newItemList = props.packItemNames.filter((item, i) => i !== index);
    props.setPackItemNames(newItemList);

    var copyMap = new Map(props.toPackList);
    copyMap.set(item, 0);
    setToPackList(copyMap);
  };

  const showList = () => {
    if (props.packItemNames.length === 0) {
      console.log("to pack list is empty");
      return <p class="body-text">your to pack list is empty</p>;
    } else {
      const itemList = props.packItemNames.map((item, index) => {
        return (
          <div class="list-item">
            <p key={index} class="body-text">
              {item}, quantity: {toPackList.get(item)}
            </p>
            <button
              onClick={() => removeItem(item, index)}
              class="remove-button"
            >
              remove
            </button>
          </div>
        );
      });
      return itemList;
    }
  };

  const calculateItemsToPack = () => {
    console.log("calculate total");
    var items = 0;
    for (let i = 0; i < props.packItemNames.length; i++) {
      var num = props.toPackList.get(packItemNames[i]);
      items = items + num;
    }
    return (
      <p class="body-text">
        <br></br>
        <b>total number of items to pack: {items}</b>
      </p>
    );
  };

  const resetToPack = () => {
    props.setToPackList(itemMap);
    props.setPackItemNames([]);
  };

  return (
    <div>
      <h1 class="header">to pack:</h1>
      {showList()}
      {calculateItemsToPack()}
      <button
        aria-label="reset packing list button"
        onClick={() => {
          resetToPack();
        }}
        class="reset-button"
      >
        <h2 class="button-text">clear all</h2>
      </button>
    </div>
  );
}
