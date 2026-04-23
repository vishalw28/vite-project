function ListGroup() {
  const items = ["Bangalore", "Pune", "Mumbai", "Chennai", "Delhi"];

  items.length = 0;

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

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
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
