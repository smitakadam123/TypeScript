"use strict";
exports.__esModule = true;
var Sample = (function () {
    function Sample() {
        this.watt = 40;
    }
    Sample.prototype.getShow = function () {
        console.log("Watt is :" + this.watt);
    };
    return Sample;
}());
exports.Sample = Sample;
var obj = new Sample();
obj.getShow();
