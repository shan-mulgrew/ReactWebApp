import { Fragment } from "react";
function ListGroup() {
  let items = ["Cavan", "Dublin", "Kerry", "Kildare"];
  items = [];

  return (
    <>
      <h1>Header</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
