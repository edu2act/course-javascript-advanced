/**
 * Created by qile on 2017/8/14.
 */
/*
 * 创建 ZipCode 示例.
 *
 * 可被接受的邮政编码格式:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * 如果构造函数参数传入的格式不符合以上任何一个格式，将会抛出异常。
 */

function ZipCode(zip) {
    zip = new String(zip);
    pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
    if (pattern.test(zip)) {
        // zip code value will be the first match in the string
        this.value = zip.match(pattern)[0];
        this.valueOf = function() {
            return this.value
        };
        this.toString = function() {
            return String(this.value)
        };
    } else {
        throw new ZipCodeFormatException(zip);
    }
}

function ZipCodeFormatException(value) {
    this.value = value;
    this.message = "不是正确的邮政编码";
    this.toString = function() {
        return this.value + this.message
    };
}

/*
 * 这可能是一个验证美国地区中的脚本
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
    try {
        z = new ZipCode(z);
    } catch (e) {
        if (e instanceof ZipCodeFormatException) {
            return ZIPCODE_INVALID;
        } else {
            return ZIPCODE_UNKNOWN_ERROR;
        }
    }
    return z;
}

a = verifyZipCode(95060);         // 返回 95060
b = verifyZipCode(9560);          // 返回 -1
c = verifyZipCode("a");           // 返回 -1
d = verifyZipCode("95060");       // 返回 95060
e = verifyZipCode("95060 1234");  // 返回 95060 1234


//222222222222222重新抛出异常
try {
    throw n; // 抛出一个数值异常
} catch (e) {
    if (e <= 50) {
        // 异常在 1-50 之间时，直接处理
    } else {
        // 异常无法处理，重新抛出
        throw e;
    }
}