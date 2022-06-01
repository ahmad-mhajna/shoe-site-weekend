import "./style.css";
import Card from "./components/Card/Card";
import { Route, Link, useHistory, Router } from "react-router-dom";
import apiInstance from "./api/api";
import { useEffect, useRef, useState } from "react";
import Form from "./components/Form/Form";
import {} from "react-router-dom";
function App() {
  const initalShoe = { name: "", brand: "", price: 0 };
  let History = useHistory();
  const spinnerRef = useRef();
  const [data, setData] = useState([]);
  const [shoe, setShoe] = useState(initalShoe);
  const [isEdit, setEdit] = useState(false);
  const getData = async () => {
    spinnerRef.current.classList.remove("hidden");
    try {
      const response = await apiInstance.get("");
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      spinnerRef.current.classList.add("hidden");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const editShoe = async () => {
    spinnerRef.current.classList.remove("hidden");
    try {
      await apiInstance.put(`/${shoe.id}`, shoe);
      getData();
      setShoe(initalShoe);
      setEdit(false);
    } catch (e) {
      console.error(e);
    } finally {
      spinnerRef.current.classList.add("hidden");
    }
  };
  const addShoe = async () => {
    spinnerRef.current.classList.remove("hidden");
    try {
      await apiInstance.post("", shoe);
      setShoe(initalShoe);
      getData();
    } catch (e) {
      console.error(e);
    } finally {
      spinnerRef.current.classList.add("hidden");
    }
  };
  const deleteShoe = async (event) => {
    spinnerRef.current.classList.remove("hidden");
    try {
      await apiInstance.delete(`/${event.target.getAttribute("data-id")}`);
      getData();
    } catch (error) {
      console.error(error);
    } finally {
      spinnerRef.current.classList.add("hidden");
    }
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
        <div className="spinner hidden" ref={spinnerRef}>
          <div className="loader">Loading...</div>
        </div>
      </Router>
    </div>
  );
}

export default App;
