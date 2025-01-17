function sayHi(name) {
  console.log("Hello ${name}");
}

const sayHi2 = (name) => {
  console.log("Howdy ${name}");
};

const sayHi3 = (name) => {
  console.log("Yow! ${name}");
};

MediaSourceHandle.exports = { sayHi, sayHi2, sayHi3 };
