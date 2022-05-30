import "./style.css";
import Card from "./components/Card/Card";
import { Route, Link, useHistory, Router } from "react-router-dom";
import apiInstance from "./api/api";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import {} from "react-router-dom";
function App() {
  const initalShoe = { name: "", brand: "", price: 0 };
  let History = useHistory();
  const [data, setData] = useState([]);
  const [shoe, setShoe] = useState(initalShoe);
  const [isEdit, setEdit] = useState(false);
  const getData = async () => {
    const response = await apiInstance.get("");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const editShoe = async () => {
    try {
      await apiInstance.put(`/${shoe.id}`, shoe);
      getData();
      setShoe(initalShoe);
      setEdit(false);
    } catch (e) {
      console.error(e);
    }
  };
  const addShoe = async () => {
    try {
      await apiInstance.post("", shoe);
      setShoe(initalShoe);
      getData();
    } catch (e) {
      console.error(e);
    }
  };
  const deleteShoe = async (event) => {
    await apiInstance.delete(`/${event.target.getAttribute("data-id")}`);
    getData();
  };
  return (
    <div className="app-root">
      <Router history={History}>
        <Route path="/" exact>
          <Link to="/form">Add Shoe</Link>
          <div className="cards">
            {data.map((shoe, i) => {
              return (
                <Card
                  shoe={shoe}
                  key={i}
                  deleteShoe={deleteShoe}
                  editShoe={(shoe) => {
                    setShoe(shoe);
                    setEdit(true);
                  }}
                />
              );
            })}
          </div>
        </Route>
        <Route path="/form">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              History.push("/");
              if (!isEdit) addShoe();
              else editShoe();
            }}
            shoe={shoe}
            setShoe={setShoe}
            isEdit={isEdit}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
