var Utils = function(w){
    return {
        getTime: function(){
            return new Date().getTime();
        },
        random: function(a){
            return Math.floor(Math.random() * (a * 1000));
        },
        ucWords(string){
            if(!string) return;
            function ucFirst(str){
                return str.substr(0, 1).toUpperCase() + str.substr(1, str.length).toLowerCase();
            }
            var arrayWords = string.split(" ")
            ,   returnString = ""
            ,   len;
            len = arrayWords.length;
            for(var i = 0; i < len ; i++){
                returnString = (i != (len - 1)) ? (returnString + ucFirst(arrayWords[i]) + " ") : (returnString + ucFirst(arrayWords[i]));
            }
            return returnString;
        }
    }
}(window);

export default Utils;