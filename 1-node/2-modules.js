//Modules - Encapsulated Code(Only share minimum)
//CommonJS, every file is a module(By default)

const data = require('./3-names');
const func = require('./4-utils')
const persondata = require('./5 - alternative flavor');

console.log(persondata);
require('./6-mind-grenade');
func(data.john);
func(data.peter);