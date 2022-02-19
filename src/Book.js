
import React from "react";
const Book = (props) => {
  const age = "30";
  const clickHandler = (e) => {
    alert("clickHandler");
    console.log("e:", e);
    console.log("target: ", e.target);
  };
  const complexExample = (author) => {
    alert("complexExmp");
    console.log(author);
  };
  const { title, author } = props.book; //props destructuring
  return (
    <div>
      <br />
      <h1>{title}</h1>
      <button onClick={clickHandler}>checkClickHandler</button>
      {/* call function with only e action */}
      <button onClick={() => complexExample(author)}>
        checkComplexExample
      </button>
      {/* correct way to call function */}
      <h1>{age}</h1>
      <h1
        onMouseOver={() => {
          console.log("on mouse over");
        }}
      >
        on mouse over
      </h1>
    </div>
  );
};
export default Book
