import { useState } from "react";

function ListGroup() {
  const items = ["Bangalore", "Pune", "Mumbai", "Chennai", "Delhi"];

  //   const message = items.length === 0 ? <p>No item found</p> : null;
  // More concise way to write the code without null.
  const message = items.length === 0 && <p>No item found</p>;

  // Event Handler
  const handleClick = (event: MouseEvent) => {
    // console.log("Clicked " + item + ", index=" + index)
    console.log(event);
  };

  //    let selectedIndex = 0; // Local to function, hence use the managed state i.e. useState
  // Hook i.e. state hook which will be specific the component. If we add another listgroup, then it will has its own state.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    /**
     * In react component can't return more than one element.
     * Hence we can't add the <h1/> with <ul/>. Rather we wrap multiple elements into single
     */
    //
    // Wrap using abbrevation, which creates the another element in dom
    // <div>
    //    ....
    // </div>

    // Using this we'll not have additional element on the screen.
    // You can check by inspecting in the browser.
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map(
          (
            item,
            index, // Here index parameter is optional.
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default ListGroup;
