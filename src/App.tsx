import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import { useState } from "react";
import "./App.css";
import { BsAlarmFill } from "react-icons/bs";
import Like from "./components/Like/Like";




function App() {

  

  // const [alertvisibile, setAlertvisibility] = useState(false);
  // let items = ["New Group", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectitem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectitem={handleSelectitem}
  //     />
  //   </div>
  // );
  // return (
  //   <div>
  //     {/* <Alert text="Hello World"/> */}
  //     <Alert>
  //       Hello <span>World</span>
  //       </Alert>
  //   </div>
  // );

  // return (
  //   // <div>
  //   //   <Button>
  //   //   <button type="button" className="btn btn-success">Success</button>
  //   // </Button>
  //   // </div>

  //   // solution below
  //  <div>
  //   {alertvisibile && <Alert onClose={() => setAlertvisibility(false)}>Alert</Alert>}
  //   <Button color='primary' onClick={() => setAlertvisibility(true)}>
  //     My Button
  //   </Button>
  //  </div>
  // );

  // return (
  //   <div>
  //     <BsAlarmFill color="Blue" size="2em"/>
  //   </div>
  // );

  // return (
  //   <div>
  //     <Button color="primary" onClick={() => console.log("Clicked")}>
  //       My Button
  //     </Button>
  //   </div>
  // );


  return (
    <div>
      {/* <Like onClick={() => console.log("Clicked")}/> */}
      <Like onClick={() => console.log("Clicked")} />
    </div>
  )

}

export default App;
