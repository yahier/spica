/**
 * Created by yahier on 17/5/16.
 */
/** 本文件测试 非常规方法*/

var Func = {
    main: function () {
       // test2();

    }
}



var overrideSelf = function () {
    console.log("override self");
    overrideSelf = function () {
        console.log("override 改变");

    }
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