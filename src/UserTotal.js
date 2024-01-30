import React, {useEffect} from "react";
import "./App.css";

function UserTotal(props) {

  useEffect(() => {
    console.log("Called Props!!");
  });

  useEffect(() => {
    console.log("Count is", props.count);
  },[props.count, props.total]);    
  return (
    <>
      <div className="App">
        {/* Example 2*/}
        <h2>Count: {props.count}</h2>

         {/* Example 2*/}
         <h2>Total: {props.total}</h2>
      </div>
    </>
  );
}

export default UserTotal;
