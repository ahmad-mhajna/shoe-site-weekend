import "./style.css";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { BrowserRouter, Route, Link } from "react-router-dom";
import apiInstance from "./api/api";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
function App() {
  const [data, setData] = useState([]);
  const [shoe, setShoe] = useState({});
  const getData = async () => {
    const response = await apiInstance.get("");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const editShoe = () => {};
  const addShoe = async () => {
    await apiInstance.post("", shoe);
    getData();
  };
  const deleteShoe = async (event) => {
    await apiInstance.delete(`/${event.target.getAttribute("data-id")}`);
    getData();
  };
  return (
    <div className="app-root">
      <BrowserRouter>
        <Route path="/" exact>
          <Link to="/form">Add Shoe</Link>
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
        </Route>
        <Route path="/form">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addShoe();
            }}
            shoe={shoe}
            setShoe={setShoe}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
