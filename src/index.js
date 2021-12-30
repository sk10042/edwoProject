import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from './survey/Landing';
import QuestionAnswering from './survey/QuestionAnswering';
import Result from './survey/Result';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Landing />} /> 
      <Route path='/QuestionAnswering' element={<QuestionAnswering />}  /> 
      <Route path='/Result' element={<Result />}  /> 
    </Routes>
  </BrowserRouter>,
  rootElement
)