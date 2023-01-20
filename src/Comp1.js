import React from "react";

export function CompText(props){
    return (
        <p>{props.text}</p>
    )
}

export default function Comp1(){
    // let text = "Hello from comp1"; //if we use this normal variable then on click the button the text won't change in UI
    // to solve the above issue, React.useState() is used
    let [text, setText] = React.useState("Hello from comp1"); 

    function handleClick(){
        // text = "Hello World";
//by this below code we can toggle the output on click of the change text button
        if(text === "Hello World"){
        setText("Hello from comp1");
        } else {
            setText("Hello World");
        }
    }
    return (
        <>
        <button onClick={handleClick}>Change Text</button>    
        <CompText text={text}></CompText>
        </>
    )
}