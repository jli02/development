import { Item } from "./Item";
import itemData from "../assets/item-data.json";
import img from "../assets/cat.jpg";

export function Items(props) {
  const {
    data,
    toPackList,
    setToPackList,
    packItemNames,
    setPackItemNames,
    filteredItems,
  } = props;

  const buildElements = () => {
    const itemsList = props.filteredItems.map((item, index) => (
      <Item
        name={item.name}
        image={img}
        category={item.category}
        importance={item.importance}
        toPackList={props.toPackList}
        setToPackList={props.setToPackList}
        packItemNames={props.packItemNames}
        setPackItemNames={props.setPackItemNames}
      />
    ));

    return itemsList;
  };

  return <div class="all-items">{buildElements()}</div>;
}
