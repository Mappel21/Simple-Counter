//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props){
    return(<div className="bigCounter">
                <div className="calendar">
                    <i class="far fa-clock"></i>
                </div>
                <div className="four"></div>
                <div className="three"></div>
                <div className="two"></div>
                <div className="one"></div>
    </div>):
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
