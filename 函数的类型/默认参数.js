"use strict";
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    if (lastName === void 0) { lastName = '123'; }
    return firstName + ' ' + lastName;
}
var tomcat3 = buildName('Tom', 'Cat');
var cat3 = buildName(undefined);
console.log(cat3);
//# sourceMappingURL=默认参数.js.map