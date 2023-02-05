import React, {useState } from "react";



function Document(props) {



    const [onButton,setButton]=useState(true);

    const handleScroll = event => {
        if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
          setButton(false);
        }
      };




    return (
        <>
            <h1 ClassName="title">{props.title}</h1>
            <div className="content" style={{

               width: "400px",height: "300px", overflow: "auto"
    
            }} onScroll={handleScroll}>{props.content}</div>
            <button disabled={onButton ? true : false} >I Agree</button>
        </>




    );
}

export default Document;
