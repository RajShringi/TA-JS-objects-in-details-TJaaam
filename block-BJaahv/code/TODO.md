# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object

```js
function createUser(name, id, noOfProjects) {
  let user = {};
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  user.getProjects = function () {
    return user.noOfProjects;
  };
  user.changeName = function (name) {
    user.name = name;
  };
  user.incrementProject = function () {
    user.noOfProjects++;
    return user.noOfProjects;
  };
  user.decrementProject = function () {
    user.noOfProjects--;
    return user.noOfProjects;
  };
  return user;
}
```

- [ ] Using Object.create (prototypal pattern)

```js
let userMethods = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (name) {
    this.name = name;
  },
  incrementProject: function () {
    this.noOfProjects++;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects--;
    return this.noOfProjects;
  },
};
function createUser(name, id, noOfProjects) {
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}
```

- [ ] Using Pseudoclassical Way

```js
function User(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
User.prototype = {
  getProjects: function () {
    return this.noOfProjects;
  },
  changeName: function (name) {
    this.name = name;
  },
  incrementProject: function () {
    this.noOfProjects++;
    return this.noOfProjects;
  },
  decrementProject: function () {
    this.noOfProjects--;
    return this.noOfProjects;
  },
};
```

- [ ] Using Class

```js
class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(name) {
    this.name = name;
  }
  incrementProject() {
    this.noOfProjects++;
    return this.noOfProjects;
  }
  decrementProject() {
    this.noOfProjects--;
    return this.noOfProjects;
  }
}
```

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
let arya = createUser("arya", 0, 2);
console.group(arya.name);
console.log(arya.name);
console.log(arya.id);
console.log(arya.noOfProjects);
arya.changeName("Arya Stark");
console.log(arya);
console.groupEnd();

let arya = new User("arya", 0, 2);
let jhon = new User("jhon", 1, 4);

console.group(arya.name);
console.log(arya.name);
console.log(arya.id);
console.log(arya.noOfProjects);
arya.changeName("Arya Stark");
console.log(arya);
console.groupEnd();
```
