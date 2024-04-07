export function PackingList(props) {
  const { toPackList, setToPackList } = props;

  const removeItem = (item, index) => {
    props.setToPackList((toPackList) => {
      return props.toPackList.filter((item, i) => i !== index);
    });
  };

  const displayEmptyMessage = () => {
    for (let key in props.toPackList) {
      console.log("greater than 0" + props.toPackList.get(key) > 0);
      if (props.toPackList.get(key) === 0) {
        return false;
      }
    }

    return true;
  };

  //   const showList = () => {
  //     return toPackList;
  //   };
  //   //     // if (displayEmptyMessage()) {
  //     //   console.log("to pack list is empty");
  //     //   return <p class="body-text">your to pack list is empty</p>;
  //     // } else {
  //     //     for (let key in props.toPackList) {
  //     //         if (props.toPackList)
  //     //     }

  //     //     props.toPackList.size === 0) {
  //     //   console.log("to pack list is empty");
  //     //   return <p class="body-text">your to pack list is empty</p>;
  //     // }

  //     // toPackListItems = [];
  //     // for (let key in props.toPackList) {

  //     //   console.log(key);
  //     //   console.log(props.toPackList.get(key));
  //     //   return (
  //     //     <div>
  //     //       <p class="body-text">
  //     //         {key} and {props.toPackList.get(key)}
  //     //       </p>
  //     //     </div>
  //     //   );
  //     // }
  //     // }

  //     console.log("keys" + props.toPackList.keys());
  //     console.log("showing list");

  //     const toPackItemsList = props.toPackList.keys().map((name, index) => {
  //       return (
  //         <div>
  //           <p key={index} class="body-text">
  //             {/* {toPackItem.name}, amount: {toPackList[index].count} */}
  //             {name}, quantity: {props.toPackList.get(name)}
  //           </p>
  //           {/* <button
  //             onClick={() => {
  //               removeItem(name, index);
  //             }}
  //           >
  //             remove
  //           </button> */}
  //           {/* <button
  //             onClick={() => {
  //               packItem(toPackItem, index);
  //             }}
  //           >
  //             already packed
  //           </button> */}
  //         </div>
  //       );
  //     });

  //     console.log("showing list");

  //     console.log("pack length:" + props.toPackList.length);
  //     return props.toPackList.get("pants");
  //   };

  const calculateItemsToPack = () => {
    var items = 0;
    for (let i = 0; i < props.toPackList.length; i++) {
      items += 1;
      // items = items + toPackList[i].count;
    }
    return <p class="body-text">Total number of items to pack: {items}</p>;
  };

  const resetToPack = () => {
    props.setToPackList([]);
  };

  return (
    <div>
      <h2>to pack:</h2>
      {/* {showList()} */}
      {calculateItemsToPack()}
      <button
        onClick={() => {
          resetToPack();
        }}
      >
        clear all
      </button>
    </div>
  );
}
