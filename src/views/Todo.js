import { useState } from "react";

const Todo = () => {
  const [ test, setTest] = useState("test not yet started");

  function updateTest(value) {
    setTest(value);
  }

  return (
    <div>
      <div onClick={() => {updateTest("test has been updated")}}>
      click to update test
      </div>
      <div>
        { test }
      </div>
    </div>
  )
};

export default Todo;
