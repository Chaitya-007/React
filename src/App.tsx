import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import './App.css'

function App() {
  const [alertvisibile, setAlertvisibility] = useState(false);
  let items = ["New Group", "San Fransisco", "Tokyo", "London", "Paris"];

  const handleSelectitem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectitem={handleSelectitem}
      />
    </div>
  );
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
}

export default App;
