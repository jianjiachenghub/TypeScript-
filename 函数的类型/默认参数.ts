function buildName(firstName: string = 'Tom', lastName: string = '123') {
    return firstName + ' ' + lastName;
}
let tomcat3 = buildName('Tom', 'Cat');
let cat3 = buildName(undefined);
console.log(cat3)