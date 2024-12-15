import { useEffect, useState } from "react";

const Todo = () => {
  const [test, setTest] = useState("test not yet started");
  const [effect, setEffect] = useState("Effect incomplete");

  function updateTest(value) {
    setTest(value);
  }

  useEffect(() => {
    setEffect("effect complete")

  }, []);

  return (
    <div>
      <div
        onClick={() => {
          updateTest("test has been updated");
        }}
      >
        click to update test
      </div>
      <div>{test}</div>
      <div> {effect} </div>
    </div>
  );
};

export default Todo;
