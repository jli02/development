import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { FilterBox } from "./components/FilterBox";
import { Items } from "./components/Items";
import { Item } from "./components/Item";
import itemData from "./assets/item-data.json";
import { PackingList } from "./components/PackingList";

// map of items for keeping track of how many of each we have

export let itemMap = new Map([
  ["shirt", 0],
  ["pants", 0],
  ["toothbrush", 0],
  ["watch", 0],
  ["laptop", 0],
  ["socks", 0],
  ["book", 0],
  ["underwear", 0],
  ["hat", 0],
  ["face towel", 0],
  ["toothpaste", 0],
  ["headphones", 0],
  ["journal", 0],
  ["ipad", 0],
]);

function App() {
  // state variable to hold the data
  const [data, setData] = useState(itemData);

  // state variable for the running list of added items
  const [toPackList, setToPackList] = useState(itemMap);

  const [packItemNames, setPackItemNames] = useState([]);

  const [filteredItems, setFilteredItems] = useState(itemData);

  // runs when component is first loaded, makes copy of the data
  // so that original is untouched
  const loadData = () => {
    setData([...itemData]);
  };

  useEffect(() => loadData(), []);

  return (
    <div className="App">
      <h1 class="title">What do you need to pack?</h1>

      <div class="main">
        <div class="filter-box">
          <FilterBox
            data={itemData}
            setData={setData}
            filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
          ></FilterBox>
        </div>
        <div>
          <Items
            data={itemData}
            toPackList={toPackList}
            setToPackList={setToPackList}
            packItemNames={packItemNames}
            setPackItemNames={setPackItemNames}
            filteredItems={filteredItems}
          ></Items>
        </div>

        <div>
          <PackingList
            toPackList={toPackList}
            setToPackList={setToPackList}
            packItemNames={packItemNames}
            setPackItemNames={setPackItemNames}
          ></PackingList>
        </div>
      </div>
    </div>
  );
}

export default App;
