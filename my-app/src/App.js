import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import img from "./assets/suitcase.jpg";
import { FilterBox } from "./components/FilterBox";
import { Items } from "./components/Items";
import itemData from "./assets/item-data.json";
import { PackingList } from "./components/PackingList";

// should i split into more components?

// map of items for keeping track of how many of each we have

let itemMap = new Map([
  ["shirt", 0],
  ["pants", 0],
  ["toothbrush", 0],
]);

function App() {
  // state variable to hold the data
  const [data, setData] = useState(itemData);

  // state variable for the running list of added items
  const [toPackList, setToPackList] = useState(itemMap);

  // const [packItemNames, setPackItemNames] = useState([]);

  // const [packedList, setPackedList] = useState([]);

  // runs when component is first loaded, makes copy of the data
  // so that original is untouched
  const loadData = () => {
    setData([...itemData]);
  };

  useEffect(() => loadData(), []);

  const addToList = (name) => {
    console.log("add");
    console.log(toPackList);
    // props.toPackList.set(name, props.toPackList[name] + 1);
    var copyMap = new Map(toPackList);
    copyMap.set(name, toPackList.get(name) + 1);
    setToPackList(copyMap);
    // props.toPackList[name] += 1;

    // const toPackItem = {
    //   name: name,
    //   count: count,
    // };

    // props.setToPackList([...props.toPackList, toPackItem]);
  };

  const showList = () => {
    //console.log("keys" + toPackList.keys());
    console.log("showing list");
    console.log(toPackList);

    return toPackList;

    // const toPackItemsList = toPackList.keys().map((name, index) => {
    //   return (
    //     <div>
    //       <p key={index} class="body-text">
    //         {/* {toPackItem.name}, amount: {toPackList[index].count} */}
    //         {name}, quantity: {toPackList.get(name)}
    //       </p>
    //       {/* <button
    //         onClick={() => {
    //           removeItem(name, index);
    //         }}
    //       >
    //         remove
    //       </button> */}
    //       {/* <button
    //         onClick={() => {
    //           packItem(toPackItem, index);
    //         }}
    //       >
    //         already packed
    //       </button> */}
    //     </div>
    //   );
    // });

    // const list = toPackList.map((item, index) => {
    //   return (
    //     <p key={index} class="body-text">
    //       {toPackList.get("pants")}
    //     </p>
    //   );
    // });
    // return list;
  };

  return (
    <div className="App">
      <h1>What do you need to pack?</h1>
      {/* <FilterBox></FilterBox> */}
      <div class="main">
        <div>
          <Items
            data={itemData}
            toPackList={toPackList}
            setToPackList={setToPackList}
            addToList={addToList}
          ></Items>
        </div>
        <div>
          {showList()}
          <PackingList
            toPackList={toPackList}
            setToPackList={setToPackList}
          ></PackingList>
        </div>
      </div>
    </div>
  );
}

export default App;
