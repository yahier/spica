/**
 * Created by yahier on 17/5/20.
 */
//很diao的原型哦

var PrototypeTest = {
    main: function () {
        //F.prototype = attr1;
        //var f = new F();
        // alert("prototypeya:" + f.say());


        addAttr();
        addAttr2();
        var f = new F("yahier");
        //test0
        f.getInfo();
        //test1
        console.log("price:" + f.get("price"));
        //test2
        console.log("name:" + f.name);
        delete f.name;
        console.log("name:" + f.name);

    }
}

function F(name) {
    this.name = name;

}

/**
 * 用原型 扩充F的属性和方法
 */
var addAttr = function () {
    F.prototype = {
        name: "bingo",
        price: 100,
        rate: 5,
        getInfo: function () {
            alert("PrototypeTest function well");
        }
    }
}

var addAttr2 = function () {
    F.prototype.get = function (what) {
        return this[what];
    }
}



