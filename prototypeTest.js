/**
 * Created by yahier on 17/5/20.
 */
//很diao的原型哦

var PrototypeTest = {
    main: function () {
        F.prototype = attr1;
        var f = new F();
        alert("prototype:" + f.say());
    }
}

function F() {


}

var attr1 = {
    name: 'yahier',
    say: function () {
        return 'i am ' + this.name;
    }
}