import "./styles.css";
import { Input } from "./Component/Input"; // Fixed filename extension
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
  type: string;
}

// Added initial state for useReducer
const reducer = (state: TodoListProperty[], action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.EDIT_TODO:
      return [
        ...state.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              item: action.payload.item
            }
          } return el
        })
      ];
    case ACTIONS.DONE_TODO:
      return [
        ...state.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              isDone: !el.isDone
            }
          } else {
            return el
          }
        })
      ];
    default:
      return state;
  }
}



const App: React.FC = () => {
  const [todoItem, setTodoItem] = useState<string>("");
  const [todoList, dispatch] = useReducer(reducer, []); // Added initial state for useReducer

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoItem(e.target.value);
  }

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoItem) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { id: Date.now(), item: todoItem, isDone: false } }) // Use ACTIONS here
      setTodoItem("");
    }
  };

  const handleisDone = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    console.log(e.target.checked); // Debugging code
    dispatch({ type: ACTIONS.DONE_TODO, payload: { id: id, item: "", isDone: e.target.checked } }) // Use ACTIONS here, empty 'item'
  }

  const handleEdit = (changedTodoString: string = '', id: number) => {
    // console.log(e.currentTarget.textContent, id);
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: id, item: changedTodoString, isDone: false } }) // Use ACTIONS here, empty 'item'
  }

  console.log(todoList);

  return (
    <div className="App">
      <Input
        inputValue={todoItem}
        handleInput={handleInput}
        addTodo={handleClick}
      />
      {/* Set isEmpty to check for truthiness */}
      <List handleEdit={handleEdit} handleisDone={handleisDone} isEmpty={!!todoList.length} list={todoList} />
    </div>
  );
};

export default App;
