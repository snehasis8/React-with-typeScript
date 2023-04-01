import "./styles.css";
import { Input } from "./Component/Input";
import { useReducer, useState } from "react";
import { List } from "./Component/List";
import { ACTIONS } from "./Component/Actions/TodoAction";

export type TodoListProperty = {
  item: string;
  isDone: boolean;
  id: number;
};

type ActionType = {
  payload: TodoListProperty;
  type: 'ADD_TODO' | 'DELETE_TODO' | 'EDIT_TODO' | 'DONE_TODO';
}

const reducer = (state: TodoListProperty[], action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.DONE_TODO:
      return [...state.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            isDone: !el.isDone
          }
        } else {
          return el
        }

      })];
    default:
      return state;
  }
}

function addTodo(item: string) {
  console.log(item);
  return { isDone: false, id: Date.now(), item: item }
}

const App: React.FC = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [todoList, dispatch] = useReducer(reducer, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoItem(e.target.value);
  }

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoItem) {
      dispatch({ type: "ADD_TODO", payload: { id: Date.now(), item: todoItem, isDone: false } })
      setTodoItem("");
    }
  };

  const handleisDone = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    console.log(e.target.checked);
    dispatch({ type: "DONE_TODO", payload: { id: id, item: todoItem, isDone: e.target.checked } })
  }

  const handleDelete = () => {

  }

  return (
    <div className="App">
      <Input
        inputValue={todoItem}
        handleInput={handleInput}
        addTodo={handleClick}
      />
      <List handleisDone={handleisDone} isEmpty={!!todoList.length} list={todoList} />
    </div>
  );
};

export default App;
