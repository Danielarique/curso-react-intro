import React from "react";

import { AppIU } from "./AppIU";
import { TodoProvider } from "./TodosContext";


function App() {
  

  return (
    <TodoProvider>
    <AppIU />
  </TodoProvider>
    
  );
}

export default App;
