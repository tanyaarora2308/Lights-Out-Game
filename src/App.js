import React from "react";
import Board from "./Board2";
import Cell from "./Cell";
import "./App.css";


const App = ()  =>  {
    return (
      <div className='App'>
        <Board nrows= {5}/>
      </div>
    );
}

export default App;
