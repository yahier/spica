/**
 * Created by yahier on 17/5/16.
 */
/** 本文件测试 非常规方法*/

var Func = {
    main: function () {
        // test2();
        var hero = new Hero("yahier");
        hero.action();


    }
}

//对象方法
function Hero(name) {
    this.name = name;
    this.action = function () {
        alert(this.name + "保护民众");
    }

    //怎么调用此方法
    var say = function () {
        alert("起来了");
    }
}


var overrideSelf = function () {
    console.log("override self");
    overrideSelf = function () {
        console.log("override 改变");

    }
}

var testCaller = function () {
    var c = b();
}

var b = function () {
    return a();
}

var a = function () {
    return a.caller;
}

var sum = function (a, b) {
    return a + b;
}

//未通过测试
var test1 = function () {
    var sum1 = sum(function () {
        return 3;
    }, function () {
        return 4;
    });
    alert("sum:" + sum1);
}

var test2 = function () {
    var func1 = function () {
        return 4;
    }

    var func2 = function () {
        return 5;
    }

    var sumAmount = sum(func1(), func2());
    alert("sumAmount:" + sumAmount);
}


function evalTest() {
    eval("var a = 2;");
    log("evalTest:" + a);// 打印数值 2
}