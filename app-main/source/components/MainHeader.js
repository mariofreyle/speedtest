import app, {Component, createElement, createSvg} from "../assets/js/App";

function MainHeader(){
    this.render = function(){
        return (
            createElement("header", {className:"mainHeader"},
                createElement("div", {className: "container"},
                    createElement("div", {className: "logoWrapper"}, [
                        createElement("span", {className: "logoIcon"}, createSvg("$1")),
                        createElement("span", {className: "logoText", textContent: "SPEEDTEST"})
                    ])
                )
            )
        )
    }
}

export default MainHeader;