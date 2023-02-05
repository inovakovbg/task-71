import React, {useState } from "react";



function Document  ({title,content})  {



    const [onButton,setButton]=useState(true);

    const handleScroll = event => {
        if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
          setButton(false);
        }
      };




    return (
        <section>
            <h1 className="title">{title}</h1>
            <div className="content" style={{

               width: "400px",height: "300px", overflow: "auto"
    
            }} onScroll={handleScroll}>{content}</div>
            <button disabled={onButton ? true : false} >I Agree</button>
        </section>




    );
}

export default Document;
