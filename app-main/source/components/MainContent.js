import app, {components, createElement, createSvg, customElement} from "../assets/js/App";
import utils from "../assets/js/Utils";

import test from "./TestConfig";
import TestStage from "./TestStage";

function MainContent(){
    var $this = this,
        testWrapper = customElement("div"),
        ispNameElem = customElement("span"),
        localIpElem = customElement("span");
    
    this.componentDidMount = function(){
        app.ajax({
            url: app.isLocal ? "http://ip-api.com/json/" : "https://ipapi.co/json/",
            dataType: "json",
            success: function(data){
                ispNameElem.textContent(utils.ucWords(app.isLocal ? data.isp : data.org)),
                localIpElem.textContent(app.isLocal ? data.query : data.ip);
            }
        });
    },
    this.open = function(){
        testWrapper.addClass("testOpen");
    },
    this.updateStatus = function(config){
        test.started = void 0 === config.started ? test.started : config.started;
        test.runType = void 0 === config.runType ? test.runType : config.runType;
        test.onprogress = void 0 === config.onprogress ? test.onprogress : config.onprogress;

        var runType = (test.runType ? "test--download" : "test--upload") + (test.onprogress ? " onprogress" : "");
        
        testWrapper.className("testWrapper" + (void 0 === config.clearClass ? " testOpen " : "") + " " + (test.started ? runType : "test--finished"));
    },
    this.renderStage = function(){
        testWrapper.render(createElement(TestStage));
    },
    this.render = function(){
        return (
            createElement("div", {className: "pageContent"},
                createElement("div", {className: "container"}, [
                    createElement(testWrapper, {className: "testWrapper"},
                        createElement(TestStage)
                    ),
                    createElement("div", {className: "log", textContent: "0.00"}),
                    createElement("footer", {className: "footer"},
                        createElement("div", {className: "hostIsp"},
                            createElement("div", {className: "hostDetails"}, [
                                createElement("div", {className: "icon"}, createSvg("$2")),
                                createElement("div", {className: "hostIp"}, [
                                    createElement("div", {className: "ispName"}, createElement(ispNameElem, {textContent: "- -"})),
                                    createElement("div", {className: "localIp textHolder"}, createElement(localIpElem, {textContent: "- -"}))
                                ])
                            ])
                        )
                    )
                ])
            )
        )
    }
};

export default MainContent;