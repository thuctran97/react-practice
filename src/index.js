import { click } from "@testing-library/user-event/dist/click";
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
  const age = "30";
  const clickHandler = (e) => {
    alert('clickHandler');
    console.log('e:', e);
    console.log('target: ', e.target);
  }
  const complexExample = (author) => {
    alert('complexExmp')
    console.log(author);
  }
  const { title, author } = props.book; //props destructuring
  return (
    <div>
      <br />
      <h1>{title}</h1>
      <button onClick={clickHandler}>checkClickHandler</button>
      {/* call function with only e action */}
      <button onClick={() => complexExample(author)}>checkComplexExample</button> 
      {/* correct way to call function */}
      <h1>{age}</h1>
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
