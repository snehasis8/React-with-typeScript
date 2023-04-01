import { TodoListProperty } from "../App";
import SingleList from "./SingleList";
type ListProps = {
  isEmpty: boolean;
  list: TodoListProperty[];
  handleisDone: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
};

export const List = ({ isEmpty, list, handleisDone }: ListProps) => (
  <div>

    {isEmpty &&
      list.map(({ isDone, id, item }) => (
        <SingleList key={id} handleIsDone={handleisDone} id={id} isDone={isDone} item={item} />
      ))}
  </div>
);
