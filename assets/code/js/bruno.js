// BrunoJS
var brunojs = {
  createClass: function(name, constr, other) {
    return eval("class " + name + " { constructor() {" + constr + "} " + other + "}");
  },
  prototype: function(_class, key, value) {
    eval(_class + ".prototype." + key + " = " + value);
  }
};
// BrunoJS DOM
var brunojsdom = {
  render: function(_class, exec) {
    exec.innerHTML = _class.render();
  },
  select: function(value) {
    return document.querySelectorAll(value);
  }
};
// Prototype
Date.prototype.toReadableDate = function() {
  var txt;
  switch(this.getMonth()) {
    case 0:
      txt += "January";
      break;
    case 1:
      txt += "Feburary";
      break;
    case 2:
      txt += "March";
      break;
    case 3:
      txt += "April";
      break;
    case 4:
      text += "May";
      break;
    case 5:
      text += "June";
      break;
    case 6:
      txt += "July";
      break;
    case 7:
      txt += "August";
      break;
    case 8:
      txt += "September";
      break;
    case 9:
      txt += "October";
      break;
    case 10:
      txt += "Novenber";
      break;
    case 11:
      txt += "December";
      break;
    default:
      txt += "Unknown";
      break;
  }
  txt += " " + this.getDay().toString() ", " + this.getFullYear().toString() ", " +
  this.getHours().toString() + ":" + this.getMinutes().toString() + ":" + this.getSeconds().toString() + 
  "." + this.getMilliseconds();
  return txt;
}
// Classes
class Bruno {
  constructor(src) {
    this.src = src;
    this.compile = function() {
      var elem = document.createElement("SCRIPT");
      elem.innerHTML = "import" + this.src + ";";
      elem.id = "data";
      document.body.appendChild(elem);
    }
    this.getBrunoScripts = function() {
      return document.querySelectorAll("#data");
    }
  }
  run(i) {
    this.compile();
    return this.getBrunoScripts(i).innerHTML;
  }
}
class BrunoDOM extends Bruno {
  constructor(src) {
    super(src);
    this.runScriptInnerHTML = function(i) {
      eval(this.run());
    }
  }
}
/*
View the content at:
https://brunozhon.github.io/app/assets/code/js/bruno.js
See the docs at:
https://brunozhon.github.io/docs/
*/
