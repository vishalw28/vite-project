
function ListGroup() {
  return (
    /**
     * In react component can't return more than one element.
     * Hence we can't add the <h1/> with <ul/>. Rather we wrap multiple elements into single
     */
    // 
    // Wrap using abbrevation, which creates the another element in dom
    // <div> 
    //     <h1>List</h1>
    //     <ul className="list-group">
    //       <li className="list-group-item active" aria-current="true">
    //         An active item
    //       </li>
    //       <li className="list-group-item">A second item</li>
    //       <li className="list-group-item">A third item</li>
    //       <li className="list-group-item">A fourth item</li>
    //       <li className="list-group-item">And a fifth one</li>
    //     </ul>
    // </div> 

    // Using this we'll not have additional element on the screen.
    // You can check by inspecting in the browser.
        <>
            <h1>List</h1>
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                An active item
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    
  );
}

export default ListGroup;
