import { Item } from "./Item";
import itemData from "../assets/item-data.json";
import img from "../assets/suitcase.jpg";

export function Items(props) {
  const { data, toPackList, setToPackList } = props;

  const addToList = (name) => {
    console.log("add");
    console.log(props.toPackList);
    // props.toPackList.set(name, props.toPackList[name] + 1);
    props.toPackList.set(name, props.toPackList.get(name) + 1);
    // props.toPackList[name] += 1;

    console.log("successfully added");
    // const toPackItem = {
    //   name: name,
    //   count: count,
    // };

    // props.setToPackList([...props.toPackList, toPackItem]);
  };

  const buildElements = () => {
    const itemsList = props.data.map((item, index) => (
      <Item
        name={item.name}
        image={img}
        addToList={addToList}
        category={item.category}
      />
    ));

    return itemsList;
  };

  return <div class="all-items">{buildElements()}</div>;
}
