/**
 * Created by yahier on 17/5/21.
 */

var Q = {
    main: function () {
        // console.log("Q-C:" + typeof new C());//object


        var o = new F23();
        //前2个值 都是undefined
        console.log("Q:" + o.q1);
        console.log("Q:" + o.q2);
        console.log("Q:" + o.q3);

    }


}

function C() {
    this.a = 1;
    return false;
}

var q3 = 21;
function F23() {
    var q1 = 1

    function C1() {
        var q2 = 2;
        return this;
    }

    return C1();
}