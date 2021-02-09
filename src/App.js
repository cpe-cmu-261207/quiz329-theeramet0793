import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [input, setInput] = useState({ name: "", gender: "", age: 0 });
  const [items, setItems] = useState([]);
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    if (items) {
      setItems(JSON.parse(items));
    }
  }, [items]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            onChange={(e) => {
              setInput({ ...input, name: e.currentTarget.value });
            }}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30"></input>
        </div>

        <button className="button is-primary is-fullwidth">Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={items.name} gender={items.gender} age={items.age} />

        <p>Theeramet Metha 620610793</p>
      </div>
    </div>
  );
}

export default App;
