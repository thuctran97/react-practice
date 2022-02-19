import React from "react";
import ReactDOM from "react-dom";

// Create element: messy -> not recommend
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello')
// }

//Stateless functional component
//always return a single JSX element: div / section / article or fragment
//always capitalize name
//use camelCase for HTML attr: className

const books = [
  {
    title: "harry potter",
    author: "jk rowling",
  },
  {
    title: "im good",
    author: "adam khoo",
  },
];
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
const Book = (props) => {
  const publish_year = "2000";
  const { job, title } = props.book; //props destructuring
  return (
    <div>
      <br />
      <h5>{props.job}</h5>
      {/* <h5>{author.toUpperCase()}</h5> */}
      <h1>{job}</h1>
      <h1>{title}</h1>
      <h1>{publish_year}</h1>
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
