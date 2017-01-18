/**
 * Created by hckrmoon on 2017. 1. 18..
 */
function greeter(person) {
    return "Hello, " + person;
}
var Foo = (function () {
    function Foo() {
    }
    return Foo;
}());
Foo.members = "1234";
console.log('haha', Foo.members);
var user = "Hello";
