/**
 * Created by yahier on 17/5/20.
 */
//很diao的原型哦

var PrototypeTest = {
    main: function () {
        //F.prototype = attr1;
        //var f = new F();
       // alert("prototypeya:" + f.say());
    }
}

function F() {


}

var attr1 = {
    name: 'bingo',
    say: function () {
        return 'i am ' + this.name;
    }
}