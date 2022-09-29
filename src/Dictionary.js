import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="Search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
