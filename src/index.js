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


// Create function, return jsx
function BookList() {
  const person_name = "thuc";
  return (
    <div>
      <Book job = 'developer'/>
      <Book title = 'harry potter'/>
    </div>
  );
}
//Using props as paramemeters
const Book = (props) => {
  const author = "jk";
  const {job, title} = props; //props destructuring
  return (
    <div>
      <br />
      <h5>{props.job}</h5>
      <h5>{author.toUpperCase()}</h5>
      <h1>{job}</h1>
      <h1>{title}</h1>
    </div>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
