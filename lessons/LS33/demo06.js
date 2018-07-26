//执行的顺序 案例一
var promise = new Promise(function (resolve, reject) {
  console.log('111');
  resolve();
});
promise.then(function () {
  console.log('222');
});
console.log('333');

//执行的顺序 案例二
new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => console.log(r));


//异步加载图片案例
function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image(url);
    image.onload = function () {
      image.width = image.height = 100;
      resolve(image);
    };
    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}
loadImageAsync("https://www.baidu.com/img/bd_logo1.png").then(
  (value) => {
    console.log("YES");
    document.body.appendChild(value);
  }
).catch(
  (error) => {
    console.log("NO");
  }
)

//ajax请求案例//////////////
const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    // client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });
  return promise;
};

// 域名检测需要解决跨域问题，具体参见跨域解决方案（如jsonp等）
//getJSON("http://panda.www.net.cn/cgi-bin/check.cgi?area_domain=qq.com").then(function (json) {

getJSON("https://api.github.com/").then(function (json) {
  console.log('Contents: ' + json);
}, function (error) {
  console.error('出错了', error);
});


/////////////////////////////////////
//promise对象作为参数的情况
var p1 = new Promise(function (resolve, reject) {
  // ...
});

var p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
//1和p2都是 Promise 的实例，但是p2的resolve方法将p1作为参数，
// 即一个异步操作的结果是返回另一个异步操作。
//注意，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。
//如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
//如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。

//
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
// p2
//     .then(result => console.log("result", result))
//     .catch(error => console.log("error", error))
// 上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。
// 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
// 所以，后面的then语句都变成针对后者（p1）。

// 又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数

//
//Promise实例的异步方法和then()中返回promise有什么区别？
// 1111111111
//Promise对象作为resolve或reject函数的参数时的情况
//p2的状态取决于p1，如果p1为pending，p2将等待p1状态的改变，p1的状态一旦改变，
//p2将会立即执行自己对应的回调
let p1 = new Promise ( (resolve, reject) => {
    setTimeout(resolve,2000);
}).then(
	()=>{console.log("11")},
	()=>{console.log("22")}
)
let p2 = new Promise ((resolve, reject) => {
    resolve(p1)
}).then(
	()=>{console.log("33")},
	()=>{console.log("44")}
)

// 2222222222
// then()中返回promise的情况
//由于then()本身就会返回一个promise，
//所以后一个then()针对的永远是一个promise，
//但是像上面代码中我们自己手动返回p4，
//那么我们就可以在返回的promise中再次通过 resolve() 和 reject() 来改变状态
let p3 = new Promise ( (resolve, reject) => {
  resolve("111");
} )
let p4 = new Promise ((resolve, reject) => {
resolve("222");
})
p3.then((value_1) => {console.log(value_1);return p4;})
.then((value_2) => {console.log(value_2);});
