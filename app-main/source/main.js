import app from "./assets/js/App";
import utils from "./assets/js/Utils";

import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";

(function(w, d, app){
    
    // ========= Page output ===========
    var content = app.createElement("div", {}, [app.createElement(MainHeader), app.createElement(MainContent)]);
    app.rootNode.render(content);

})(window, document, app);