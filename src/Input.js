import React, { useState } from "react";

const Input = ({ submit, placeholder }) => {
  const [input, setInput] = useState("");

  const handleInput = e => {
    e.preventDefault();
    setInput(Number(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          maxLength="8"
          onChange={handleInput}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default Input;
