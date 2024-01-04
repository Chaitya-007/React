// import { MouseEvent } from "react";
import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background-color: ${props => props.active ? 'blue' : 'none'};
`;

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
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // updater function

  const [selectedIndex, setSelectedIndex] = useState(-1);

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
      {/* <ul className="list-group"> */}
      {/* <ul className={styles['list-group']}> */}
      {/* <ul className={[styles.ListGroup, styles.container]. join(' ')}> */}
      <List>
        {items.map((item, index) => (
          <ListItem
          // Remove this since you have used styled components
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectitem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
