import app from "../assets/js/App";

var test = {
    started: false, // false = stop - finished, true = started
    runType: true, // true = download, false = upload
    onprogress: false, // true = progress, false = waiting
    increments: [0, 2, 4, 6, 8, 10, 12, 14, 16],
    rateProgress: 0,
    uploadFileDup: 24,
    runningTime: app.isLocal ? (1000 * 4) : 16000,
    hearbeatTime: 50,
    xhrConnections: 3,
    xhrData: [],
    downloadURL: app.URL_BASE + "/download/download.file",
    uploadURL: app.URL_BASE + "/upload/upload.file",
    gaugeCircleStrokeMin: 404,
    gaugeCircleStrokeMax: 617.5,
    gaugeNeedleRotateMin: 46,  // In deg
    gaugeNeedleRotateMax: 315  // In deg
};
test.incrementsLast = test.increments[test.increments.length - 1],
test.gaugeCircleOffsetRef = test.gaugeCircleStrokeMax - test.gaugeCircleStrokeMin,
test.gaugeNeedleRotateRef = test.gaugeNeedleRotateMax - test.gaugeNeedleRotateMin; // In deg
test.tempFile = function(size){
    var str = "1";
    for(var dup = 0; dup < size; dup++){
        str += str;
    }
    var blob = new Blob([str], {type: "plain/text"});
    return blob;
}(test.uploadFileDup);

export default test;