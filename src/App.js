import "./App.css";
import Document from "./Document";
import React, { useState, useEffect } from "react";

function App() {

  const [title, Settitle] = useState([]);
  const [content, Setcontent] = useState();




  useEffect(() => {
    Settitle("Terms and Conditions");
    fetch(
      "https://jaspervdj.be/lorem-markdownum/markdown.txt"
    )
      .then(response => response.text())
      .then(data => Setcontent(data))
  }, [])






  return (

    <div>
      <Document title="Terms and Conditions" content={content} />
    </div>



  );
}

export default App;
