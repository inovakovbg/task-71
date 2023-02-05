import "./App.css";
import Document from "./Components/Document";
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
      .then(text => Setcontent(text))
  }, [])






  return (

    <div>
      <Document title={title} content={content} />
    </div>



  );
}

export default App;
