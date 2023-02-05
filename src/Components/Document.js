import React, { useEffect, useState } from "react";






function Document(props) {


    const [title, setTitle] = useState([]);
    const [content, Setcontent] = useState('');


    useEffect(() => {
        setTitle("Terms and Conditions");
     
    }, [])







    return (
        <div>
            <div className="title">
                <h1 ClassName="title">{title}</h1>
            </div>
            <div className="content" onScroll={props.handleScroll}>{props.notes}</div>
        </div>




    );
}

export default Document;
