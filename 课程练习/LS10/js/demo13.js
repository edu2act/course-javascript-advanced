/**
 * Created by qile on 2017/8/14.
 */

//嵌套 try-blocks
//11111111111111
try {
    try {
        throw new Error("oops");
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}

// Output:
// "finally"
// "outer" "oops"


//222222222222222222222
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"


//3333333333
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"



//44444444
try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.warn("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.warn("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
