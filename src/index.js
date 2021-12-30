import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './survey/Landing';
/*
import QuestionAnswering from './survey/QuestionAnswering';
import Result from './survey/Result';
*/
import * as immutUpdate from "./edwo/updateHelper"; // <- this is the file you make;

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing />} /> 
    </Routes>
  </BrowserRouter>,
  rootElement
)

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

const nextState = immutUpdate.update(state, {
  name: { $set: "Bob" }
});

console.log(nextState.name === "Bob"); // true
console.log(state.todos === nextState.todos); // true
//3차본
console.log(nextState.test1.name === "Bob"); // true