import "./styles.css";
import { useState, useEffect } from "react";
import Alert from "./alert";
import Contents from "./contents";

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isediting, setIsediting] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter the item");
    } else if (isediting && name) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            const newName = name;
            return { ...item, title: newName };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsediting(false);
      showAlert(true, "success", "item edited successfully");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      showAlert(true, "success", "item added");
      setName("");
      console.log(list);
    }
  };
  const clearList = () => {
    showAlert(true, "danger", "List cleared");
    setList([]);
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <section className="App">
      <form className="form-container" onSubmit={submitHandler}>
        <div className="alert-div">
          {alert.show && <Alert alert={alert} showAlert={showAlert} />}
        </div>
        <h3>Grocery List</h3>
        <input
          type="text"
          value={name}
          placeholder="ex. eggs"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="submit-btn">{isediting ? "Edit" : "Submit"}</button>
      </form>
      {list.length > 0 && (
        <div>
          <Contents
            list={list}
            showAlert={showAlert}
            setList={setList}
            isediting={isediting}
            setIsediting={setIsediting}
            setName={setName}
            setEditID={setEditID}
          />
          <button className="clear-btn" onClick={clearList}>
            Clear Contents
          </button>
        </div>
      )}
    </section>
  );
}
