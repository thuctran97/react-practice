import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import ReactDOM from "react-dom";
import { books } from "./books";
import Book from "./Book";

// Create element: messy -> not recommend
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello')
// }

//Stateless functional component
//always return a single JSX element: div / section / article or fragment
//always capitalize name
//use camelCase for HTML attr: className


// Create function, return jsx
function BookList() {
  const person_name = "thuc";
  return (
    <div>
      {/* <Book job = 'developer'/>
      <Book title = 'harry potter'/> */}
      {books.map((book, index) => {
        return <Book key={index} book={book}></Book>;
      })}
    </div>
  );
}
//Using props as paramemeters
// const Book = ({job, title}) => // use this if book = {...book}: spead all properties


ReactDOM.render(<BookList />, document.getElementById("root"));
