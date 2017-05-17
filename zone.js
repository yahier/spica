/**
 * Created by yahier on 17/5/17.
 */
//测试一些 闭包 作用域 相关的

var Zone = {
    name: "yahier",
    main: function () {
        var c = a();
        console.log("zone 1:" + this.name);
        console.log("zone 2:" + c.i);// 我以为这样能访问c方法中的变量，没想到啊
        func2();
        fun3();
        console.log("alert 2:" + n());// 我以为这样能访问c方法中的变量，没想到啊
    }
}

//1、函数b嵌套在函数a内部；
//2、函数a返回函数b。

//这样在执行完var c=a( )后，变量c实际上是指向了函数b，再执行c( )后就会弹出一个窗口显示i的值（第一次为1）。
// 这段代码其实就创建了一个闭包，为什么？因为函数a外的变量c引用了函数a内的函数b，就是说：
// 当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个闭包。
function a() {
    var i = 0; //怎么在方法之外
    function b() {
        var v = 2;
    }

    return b;
}

//alert("zone2" + c.v);


var func2 = function () {
    var b = "a";
    return function () {
        return b;
    }
}


var n;
var fun3 = function () {
    var value = "value";
    n = function () {
        return value;
    }
}