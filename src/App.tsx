import "./styles.css";
import { Input } from "./Component/Input";

import { useState } from "react";
import { List } from "./Component/List";

export type todoListProperty = {
  // isDone?: boolean;
  item: string;
  isDone: boolean;
};

const App: React.FC = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [todoList, setTodoList] = useState<todoListProperty[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(e.target.value);
  };

  const handleClick = (e: React.FormEvent) => {
    console.log(e);

    e.preventDefault();
    if(todoItem){
      setTodoList([...todoList, { isDone: false, item: todoItem }]);
      setTodoItem("");
    }
    
  };

  console.log(todoList);
  return (
    <div className="App">
      <Input
        inputValue={todoItem}
        handleInput={handleInput}
        addTodo={handleClick}
      />
      {/* <button onClick={handleClick}> add Item </button> */}
    
        <List isEmpty={!!todoList.length} list={todoList} />
    </div>
  );
};

export default App;
