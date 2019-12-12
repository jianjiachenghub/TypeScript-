"use strict";
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;
//# sourceMappingURL=混合类型.js.map