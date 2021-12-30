import * as asdf from "./updateHelper"; // <- this is the file you make;

const reference = {
  asdf:1
}

/*//1,2차본
const state = { name: "Alice", todos: [] };
*/

//3차본
const state = { 
  name: "1depth", 
  test1: {
    name: "2depth",
    test11: {
      name: "3-1depth",
      ccc: "ddd",
    },
  },
  test2:{
    name:"3-2depth"
  },
  todos:[]
};

const nextState = asdf.update(state, {
  name: { $set: "Bob" }
});

console.log(nextState.name === "Bob"); // true
console.log(state.todos === nextState.todos); // true
//3차본
console.log(nextState.test1.name === "Bob"); // true

export default reference;