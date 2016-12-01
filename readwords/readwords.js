/**
 * Created by love盼 on 2016/12/1.
 */
var censor = require("lovepan");
console.log(censor.getCensoredWords());
console.log(censor.censor("some very sad,bad and mad text."));
censor.addCensoredWords("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("a vary gloomy day."));