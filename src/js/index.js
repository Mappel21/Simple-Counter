//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props){
    return(<p>Hello World</p>):
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
