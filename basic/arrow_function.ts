/**
 * Created by hckrmoon on 1/18/17.
 */

export default () => {
    /**
     * Basic Function
     */
    function Person1(age) {
        this.age = age;
        this.growOld = function () {
            this.age++;
        }
    }

    var person1 = new Person1(1);
    setTimeout(person1.growOld, 1000);
    setTimeout(function() { console.log(person1.age); }, 2000);

    /**
     * Arrow Function
     */
    function Person2(age) {
        this.age = age;
        this.growOld = () => {
            this.age++;
        }
    }

    var person2 = new Person2(1);
    setTimeout(person2.growOld, 1000);
    setTimeout(function() { console.log(person2.age); }, 2000);
};