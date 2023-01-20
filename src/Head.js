// Props -> Values that we pass to the components

import Button from "./index"
// if it is a default export then that means, we can import this in any file with any name, not necessary to give Head as name while importing in other file and if use default export then we won't have to use {} while importing

// for only export(without defalut) we must import with the same name as exported and also have to give {} to the name while importing in any file

export default function Head() { // Functional Component 
    return (
      <div id="head">
        <h1>Hello from Head</h1>
        <Button text={"Home"} value={100} data={"hello from bahni"}/>
        <Button text={"Product"}/>
      </div>
    )
}