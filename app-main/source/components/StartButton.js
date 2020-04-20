import app, {components, createElement, createSvg, customElement} from "../assets/js/App";

function StartButton(props){
    var $this = this,
        startWrapper = customElement("div");
    
    this.handleClick = function(){
        startWrapper.addClass("anim");
        
        components.MainContent.open();
        components.TestStage.clearResults();
        setTimeout(function(){
            components.TestStage.showGauge();
        }, 600);
        setTimeout(function(){
            startWrapper.remove();
            components.TestStage.run(true);
        }, 2300);
    },
    this.componentDidMount = function(){
        setTimeout(function(){
            startWrapper.removeClass("tryAgainAnim");
        }, 1100);
    },
    this.render = function(){
        return (
            createElement(startWrapper, {className: "startWrapper" + (props.action == 1 ? "" : " tryAgain") + (props.tryAgainAnim ? " tryAgainAnim" : "")},
                createElement("button", {className: "startButton", role: "button", onclick: this.handleClick}, [
                    createElement("div", {className: "buttonText", textContent: props.textContent}),
                    createElement("div", {className: "buttonBackground"}),
                    createElement("div", {className: "buttonBorder"}),
                    (props.action == 1 ? createElement("div", {className: "buttonAnimatedBorder"}) : null)
                ])
            )
        );
    }
}

export default StartButton;