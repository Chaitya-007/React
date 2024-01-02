// import { MouseEvent } from "react";
import { useState } from "react";

// {items: [], heading : string}
interface Props {
  items: string[];
  heading: string;

  onSelectitem: (item: string) => void;
}

// function ListGroup(props: Props) {

function ListGroup({ items, heading, onSelectitem }: Props) {
  // let selectedIndex = 0;
  // Event Handler
  // const handleClick = (event: MouseEvent) => {console.log(event)};

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  // items = [];

  // const message = items.length === 0 ? <p>No items</p> : null

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items</p> : null;
  //   };

  return (
    <>
      <h1>{heading}</h1> // This is a comment
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No items</p> : null} */}
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectitem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
