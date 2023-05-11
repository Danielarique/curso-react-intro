import React from "react";
import  ReactDOM  from "react-dom";

function Modal({ children}){
    console.log(children)
    return ReactDOM.createPortal(
        <div className="Modal">{children}</div>,
        document.getElementById('modal')
    );
}

export { Modal }