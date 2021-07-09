import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";
import React, { useState } from "react";
import { About } from "./About";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const onDelete = (todos) => {
    console.log("i am onDelete function of todo", todos);
    setTodo(
      todo.filter((e) => {
        return e !== todos;
      })
    );
  };
  //temp comment
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todo.length === 0) {
      sno = 0;
    } else sno = todo[todo.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodo([...todo, myTodo]);
    console.log(myTodo);
  };
  // let age = 19;
  const [todo, setTodo] = useState([
    {
      sno: 1,
      title: "go to the grocery store",
      desc: "It is important, what will you eat otherwise?",
    },
    {
      sno: 2,
      title: "go to gym",
      desc: "You will be a baloon otherwise",
    },
    {
      sno: 3,
      title: "go to college",
      desc: "It is important to stude ps!",
    },
  ]); 
  let styleMain = {
    backgroundColor: "lightblue",
  };
  return (
    <div style={styleMain}>
      <Router>
        <Header />
        <Switch>
        <Route path="/addItem">
          <AddTodo addTodo={addTodo}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {/* <AddTodo addTodo={addTodo} /> */}
            <Todos todo={todo} onDelete={onDelete} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
