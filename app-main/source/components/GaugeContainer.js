import app, {components, createElement, createSvg, customElement} from "../assets/js/App";
import test from "./TestConfig";
import StartButton from "./StartButton";

function GaugeContainer(){
    var $this = this,
        gaugeContainer = customElement("div"),
        gaugeState = customElement("div"),
        speedDetailsNumber = customElement("div"),
        incrementsContainer = customElement("div"),
        gaugeNeedle = customElement("div"),
        gaugeIcon = customElement("div");
    
    this.increments = function(){
        var items = [];
        test.increments.forEach(function(num, i){
            items.push(
                createElement("div", {className: "increment increment--" + i},
                    createElement("b", {textContent: num})
                )
            );
        });
        return items;
    },
    this.toggleDetails = function(){
        gaugeState.find("state").toggleClass("unseen");
    },
    this.clear = function(callback){
        this.update("0.00", test.gaugeCircleStrokeMin, test.gaugeNeedleRotateMin, "");
        setTimeout(function(){ callback(); }, 500);
    },
    this.remove = function(){
        setTimeout(function(){ gaugeContainer.remove(); }, 410);
    },
    this.update = function(speedRate, gaugeCircleOffset, gaugeNeedleRotate, activeIncrementsClasses){
        speedDetailsNumber.textContent(speedRate);
        gaugeIcon.find("gaugeCircleCurrentSpeed").setAttrNS(null, "stroke-dasharray", gaugeCircleOffset);
        gaugeNeedle.style({transform: "rotateZ(" + gaugeNeedleRotate + "deg)"});
        incrementsContainer.className("incrementsContainer" + activeIncrementsClasses);
    },
    this.render = function(){
        return (
            createElement(gaugeContainer, {className: "gaugeContainer"}, [
                    createElement(gaugeState, {className: "gaugeState"}, [
                    createElement("div", {className: "speedDetailsContainer state unseen"}, [
                        createElement(speedDetailsNumber, {className: "speedDetailsNumber"}, createElement("span", {textContent: "0.00"})),
                        createElement("div", {className: ""}, [
                            createElement("span", {className: "speedDetailsIcon"}, createSvg("$6")),
                            createElement("span", {className: "speedDetailsUnit textHolder", textContent: "Mbps"})
                        ])
                    ]),
                    createElement("div", {className: "connectingServer state textHolder"}, createElement("b", {textContent: "Conectando..."}))
                ]),
                createElement(incrementsContainer, {className: "incrementsContainer"}, this.increments()),
                createElement(gaugeNeedle, {className: "gaugeNeedle"}, createSvg("$3")),
                createElement(gaugeIcon, {className: "gaugeAnim gaugeIcon"}, createSvg("$4"))
            ])
        );
    }
};

export default GaugeContainer;