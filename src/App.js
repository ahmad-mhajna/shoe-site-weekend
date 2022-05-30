import "./style.css";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

import apiInstance from "./api/api";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await apiInstance.get("");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const editShoe = () => {
    console.log("editshoe");
  };
  const addShoe = () => {
    console.log("addshoe");
  };
  const deleteShoe = () => {
    console.log("deleteShoe");
  };
  return (
    <div className="app-root">
      <Button text="Add Shoe" onClick={addShoe} />
      <div className="cards">
        {data.map((shoe, i) => {
          return (
            <Card
              shoe={shoe}
              key={i}
              deleteShoe={deleteShoe}
              editShoe={editShoe}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
