/**
 * Created by qile on 2017/8/14.
 */
class Human {
    constructor() {}
    static ping() {
        return 'ping';
    }
}

class Computer extends Human {
    constructor() {
        super();
    }
    static pingpong() {
        return super.ping() + ' pong';
    }
}
Computer.pingpong(); // 'ping pong'
//////////////
class X {
    constructor() {
        Object.defineProperty(this, "prop", {
            configurable: true,
            writable: false,
            value: 1
        });
    }
    f() {
        super.prop2 = 2;
        // super.prop = 2;//Error
    }
}

var x = new X();
x.f();
console.log(x.prop); // 1