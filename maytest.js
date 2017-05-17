/**
 * Created by yahier on 17/5/16.
 */

var Maytest = {
    main: function () {
        initHtml();
    }
}



var test1 = function () {
    var a = function (a) {
        return function (a) {
            a;
        };
        return a * a;
    };

    var value = a();
    console.error(value);
}


var initHtml = function () {
    window.setTimeout('invokeJquery()', 3000); //为什么没有延迟3000毫秒呢
    log("initHtml");
}

function invokeJquery() {
    $("#body").css("background", "#ccc");
}

function log(value) {
    console.log(value)
}

// 第一个参数需要''包含起来
function testTimeOut() {
    $("#button").click(function () {
        $("p").hide();
        setTimeout('alert(2)', 2000);
    });
    setTimeout('alert(1)', 2000);
}
