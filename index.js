
const userInfo = require("./information"); 
console.log(`Hi, my name is ${userInfo.myName} from ${userInfo.campus}.`);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));