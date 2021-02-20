import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export const Input = React.forwardRef((props, ref) => (
    <div className="form-group">
      <input className="form-control" ref={ref} {...props}/>
    </div>
))

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export const FormBtn = ({bootClass, ...props}) => (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className={`btn ${bootClass}`}>
      {props.children}
    </button>
)
