import React from 'react';
import ReactDOM from 'react-dom/client';

import Head from './Head';
import Foot from './Foot';
import Comp1 from "./Comp1";

export default function Button(props) {  // we can write any name in place of props
  // console.log(props);
  // function handleClick(){
  //     console.log("after clicking the home button, this text appeared in console");
  //     alert(props.data);
  // }
  return (
      <div> 
          <button onClick={props.handleClick}>{props.text}</button>
          <p>{props.data}</p>
      </div>
  )
}

function button1Click(){
  alert("clicked button 1");
}
function button2Click(){
  alert("clicked button 2");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Head></Head>
    <Button text={'Click from root'} data={"button from root, click to go home"} handleClick={button1Click}></Button>
    <Button text={'Click from root button2'} data={"button from root, click to go products"} handleClick={button2Click}></Button>
    <Comp1></Comp1>
    <Foot></Foot>
  </div>
);

