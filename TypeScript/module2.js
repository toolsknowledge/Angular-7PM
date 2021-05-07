"use strict";
/*
    import { var_one } from "./module1";
    console.log( var_one );
*/
/*
import * as my_var from "./module1";
console.log( my_var.var_one,
             my_var.var_two,
             my_var.var_three );
*/
exports.__esModule = true;
var obj1 = {
    var_one: "Hello_1"
};
var obj2 = {
    var_one: "Hello_2"
};
var obj3 = {
    var_one: "Hello_3"
};
console.log(obj1.var_one, obj2.var_one, obj3.var_one);
