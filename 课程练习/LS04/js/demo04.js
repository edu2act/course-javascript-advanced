/**
 * Created by qile on 2017/8/14.
 */

// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全


// 严格模式使用方式
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}

