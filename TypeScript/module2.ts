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

/*
import var_one from "./module1";
console.log( var_one );
*/

/*
    import my_fun from "./module1";
    let obj:any = my_fun();
    console.log( obj.mean(),
                    obj.mern(),
                    obj.mevn() );
*/


/*
    import class_one from "./module1";
    let obj:class_one = new class_one();
    console.log(obj.var_one, obj.var_two, obj.var_three );
*/


import * as my_interfaces from ".";    //index.ts

let obj1:my_interfaces.interface1 = {
    var_one : "Hello_1"
};

let obj2:my_interfaces.interface2 = {
    var_one : "Hello_2"
};

let obj3:my_interfaces.interface3 = {
    var_one : "Hello_3"
};

console.log( obj1.var_one, obj2.var_one , obj3.var_one );
















