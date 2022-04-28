## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: "John",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};

let user2 = {
  username: "Arya",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};
let user3 = {
  username: "Bran",
};

function MainUser() {
  this.username = "Tyrion";
  this.sayHello = function sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output --> Hello Jhon,  reason --> default binding / error
console.log(user2.sayHello()); // output --> Hello Arya, reason --> default binding / error
console.log(user.sayHello.call(user2)); // output --> Hello Arya, reason --> explicit binding / error
console.log(user.sayHello.call(user2, "Hey")); // output --> Hey Arya, reason --> explicit binding / error
console.log(user.sayHello.apply(user2, ["Hey"])); // output --> Hey Arya, reason --> explicit binding / error
console.log(typeof user.sayHello.bind(user2)); // output --> function, reason --> bind return a function instead of calling that right away like call and apply / error
console.log(user.sayHello.bind(user2)()); // output --> Hello Arya, reason --> bind return a function and we are calling that function / error
console.log(userSayHello()); // output --> Hello undefined, reason --> there is no object on left side on function so value of this is window / error
console.log(typeof userSayHello.bind(user2)); // output --> function, reason --> bind return a function instead of calling that right away like call and apply / error
console.log(userSayHello.bind(user2)()); // output --> Hello Arya, reason --> bind value of this to user2 using bind function / error
console.log(user3.sayHello()); // output / error --> there is no property inside user3 called sayHello
console.log(userSayHello.apply(user3)); // output --> Hello Bran, reason --> explicit bind value of this to user3 / error
console.log(userSayHello.call(user3)); // output --> Hello Bran, reason --> explicit bind value of this to user3 / error
console.log(typeof new MainUser()); // output --> Object, reason --> we are calling constructor function with new so it will return an object / error
console.log(typeof new MainUser()); // output -->  Object, reason --> we are calling constructor function with new so it will return an object / error
console.log(new MainUser().sayHello()); // output --> Hello Tyrion, reason --> value of this point to newly created object / error
console.log(new MainUser().sayHello.call(user2)); // output --> Hello Arya, reason --> value of this point to user2 because of explicit binding / error
console.log(new MainUser().sayHello.call(user)); // output --> Hello Arya, reason --> value of this point to user because of explicit binding  / error
console.log(new MainUser().sayHello.apply(user, ["Welcome!"])); // output --> Welcome! Jhon, reason --> value of this point to user because of explicit binding   / error
```
