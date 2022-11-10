import React from "react";
import { useDebugValue } from "react";

export default function Alert(props) {
    const capitalize=(word)=>{
    const lower=word.charAt(0).toUpperCase() + word.slice(1);
    return lower;
    }
  return (
    <div style={{height:'65px'}}>
 {
    props.alert && <div>
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg} 

      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  </div>
  } 
    </div>
 
  );
}
