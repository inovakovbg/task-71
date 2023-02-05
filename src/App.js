
import "./App.css";
import React, { useState, useEffect } from 'react';

const Document = ({ title, content, handleScroll }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="content" onScroll={handleScroll}>
        {content}
      </div>
    </div>
  );
};

function App() {
  const [content, setContent] = useState('');
  const [onButton, setButton] = useState(false);

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(response => response.text())
      .then(text => {
        setContent(text);
      });
  }, []);

  const handleScroll = event => {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      setButton(true);
    }
  };

  return (
    <div>
      <Document title="Terms and Conditions" content={content} handleScroll={handleScroll} />
      <button disabled={!onButton}>I Agree</button>
    </div>
  );
}

export default App;