import { useState, useEffect, useRef } from "react";

/**
 * function representing entire filter box, including filter and sort buttons
 * @param {*} props
 * @returns
 */
export function FilterBox(props) {
  const { data, setData, filteredItems, setFilteredItems } = props;

  const [checkedClothing, setCheckedClothing] = useState(false);
  const [checkedToiletries, setCheckedToiletries] = useState(false);
  const [checkedAccessories, setCheckedAccessories] = useState(false);
  const [checkedDevices, setCheckedDevices] = useState(false);
  const [checkedMisc, setCheckedMisc] = useState(false);

  const [checkedImp1, setCheckedImp1] = useState(false);
  const [checkedImp2, setCheckedImp2] = useState(false);
  const [checkedImp3, setCheckedImp3] = useState(false);

  const [checkedAlphabetical, setCheckedAlphabetical] = useState(false);

  const handleClothing = () => {
    setCheckedClothing(!checkedClothing);
  };

  const handleToiletries = () => {
    setCheckedToiletries(!checkedToiletries);
  };

  const handleAccessories = () => {
    setCheckedAccessories(!checkedAccessories);
  };

  const handleDevices = () => {
    setCheckedDevices(!checkedDevices);
  };

  const handleMisc = () => {
    setCheckedMisc(!checkedMisc);
  };

  const handleImp1 = () => {
    setCheckedImp1(!checkedImp1);
  };

  const handleImp2 = () => {
    setCheckedImp2(!checkedImp2);
  };

  const handleImp3 = () => {
    setCheckedImp3(!checkedImp3);
  };

  const handleAlphabetical = () => {
    setCheckedAlphabetical(!checkedAlphabetical);
  };

  // could put a no matches message
  const selected = (item) => {
    var categorySelected = false;
    var importanceSelected = false;

    // case where only importance is checked
    if (
      !checkedClothing &&
      !checkedToiletries &&
      !checkedAccessories &&
      !checkedDevices &&
      !checkedMisc
    ) {
      if (
        (item.importance == 1 && checkedImp1) ||
        (item.importance == 2 && checkedImp2) ||
        (item.importance == 3 && checkedImp3)
      ) {
        importanceSelected = true;
      }
      return importanceSelected;
    }

    // case where only category is checked
    else if (!checkedImp1 && !checkedImp2 && !checkedImp3) {
      if (
        (item.category == "clothing" && checkedClothing) ||
        (item.category == "toiletries" && checkedToiletries) ||
        (item.category == "accessories" && checkedAccessories) ||
        (item.category == "devices" && checkedDevices) ||
        (item.category == "miscellaneous" && checkedMisc)
      ) {
        categorySelected = true;
      }
      return categorySelected;
    }

    // case where both filters are checked
    else if (
      (item.category == "clothing" && checkedClothing) ||
      (item.category == "toiletries" && checkedToiletries) ||
      (item.category == "accessories" && checkedAccessories) ||
      (item.category == "devices" && checkedDevices) ||
      (item.category == "miscellaneous" && checkedMisc)
    ) {
      categorySelected = true;
    }

    if (
      (item.importance == 1 && checkedImp1) ||
      (item.importance == 2 && checkedImp2) ||
      (item.importance == 3 && checkedImp3)
    ) {
      importanceSelected = true;
    }
    return categorySelected && importanceSelected;
  };

  const sortAlphabetically = (items) => {
    var sortedList = items.sort((a, b) => a.name.localeCompare(b.name));
    return sortedList;
  };

  // there is probably a more efficient way to do this...
  const filterItems = () => {
    //bug where it is not sorting alphabetically when it's just the regular data...
    if (
      !checkedClothing &&
      !checkedToiletries &&
      !checkedAccessories &&
      !checkedDevices &&
      !checkedMisc &&
      !checkedImp1 &&
      !checkedImp2 &&
      !checkedImp3
    ) {
      console.log("checked alphabetical" + checkedAlphabetical);
      if (!checkedAlphabetical) {
        props.setFilteredItems(props.data);
      } else {
        let sortedList = sortAlphabetically(props.data);
        props.setFilteredItems(sortedList);
      }
    } else {
      const filteredList = props.data.filter((item) => selected(item));
      props.setFilteredItems(filteredList);
      if (!checkedAlphabetical) {
        props.setFilteredItems(filteredList);
      } else {
        var sortedList = sortAlphabetically(filteredList);
        props.setFilteredItems(sortedList);
      }
    }
  };

  const reset = () => {
    props.setFilteredItems(props.data);
    setCheckedClothing(false);
    setCheckedToiletries(false);
    setCheckedAccessories(false);
    setCheckedDevices(false);
    setCheckedMisc(false);
    setCheckedImp1(false);
    setCheckedImp2(false);
    setCheckedImp3(false);
    setCheckedAlphabetical(false);

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  };

  useEffect(() => {
    filterItems();
  }, [
    checkedClothing,
    checkedToiletries,
    checkedAccessories,
    checkedDevices,
    checkedMisc,
    checkedImp1,
    checkedImp2,
    checkedImp3,
    checkedAlphabetical,
  ]);

  return (
    <div class="filter-box">
      <div class="selection-buttons">
        <div class="filter-buttons">
          <h1 class="header">filter items: </h1>

          <div class="checkboxes">
            <div class="category-checkboxes">
              <h2 class="body-text">
                <b>category</b>
              </h2>
              <div>
                <input
                  type="checkbox"
                  value={checkedClothing}
                  onChange={handleClothing}
                  aria-label="clothing checkbox"
                />
                <span class="body-text">clothing</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkedToiletries}
                  onChange={handleToiletries}
                  aria-label="toiletries checkbox"
                />
                <span class="body-text">toiletries</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkedAccessories}
                  onChange={handleAccessories}
                  aria-label="accessories checkbox"
                />
                <span class="body-text">accessories</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkedDevices}
                  onChange={handleDevices}
                  aria-label="devices checkbox"
                />
                <span class="body-text">devices</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkedMisc}
                  onChange={handleMisc}
                  aria-label="miscellaneous checkbox"
                />
                <span class="body-text">miscellaneous</span>
              </div>
            </div>

            <br></br>
            <div class="importance-checkboxes">
              <h2 class="body-text">
                <b>importance</b>
                <h2 class="note-text">
                  <b>
                    *on scale of 1 being most important and 3 being least
                    important
                  </b>
                </h2>
              </h2>

              <div>
                <input
                  type="checkbox"
                  value={checkedImp1}
                  onChange={handleImp1}
                  aria-label="checkbox for very important items"
                />
                <span class="body-text">very important (1)</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkedImp2}
                  onChange={handleImp2}
                  aria-label="checkbox for somewhat important items"
                />
                <span class="body-text">somewhat important (2)</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value={checkedImp3}
                  onChange={handleImp3}
                  aria-label="checkbox for not very important items"
                />
                <span class="body-text">not very important (3)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="sort-buttons">
          <h1 class="header">sort items:</h1>
          <div>
            <input
              type="checkbox"
              value={checkedAlphabetical}
              onChange={handleAlphabetical}
              aria-label="checkbox to sort by alphabetical order"
            />
            <span class="body-text">alphabetical order</span>
          </div>
        </div>
      </div>
      <br></br>
      <div class="reset-filter-sort-button">
        <button
          onClick={() => reset()}
          class="reset-button"
          aria-label="reset filter and sort button"
        >
          <h2 class="button-text">reset filter and sort</h2>
        </button>
      </div>
    </div>
  );
}

// sort items - least to most important, alphabetical
