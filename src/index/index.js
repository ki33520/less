import React,{Component} from "react";
import ReactDOM from "react-dom";
import common from "../common/common.js";

import "../common/common.less";
import "./index.less";

class World extends Component{
    render(){
        return (
            <span>World is beautiful!Yes...!</span>
        )
    }
}

class Hello extends Component{
    render(){
        console.log(World)
        return(
            <div>
                <h1>Hello,boys!</h1>
                <World />
            </div>
        )
    }
}

ReactDOM.render(
    <Hello />, 
    document.getElementById("test")
);