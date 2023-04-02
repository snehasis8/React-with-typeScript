import { TodoListProperty } from "../App";
import SingleList from "./SingleList";
export type ListProps = {
  isEmpty: boolean;
  list: TodoListProperty[];
  handleisDone: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleEdit: (e: string, id: number) => void;
};

export const List = ({ isEmpty, list, handleisDone, handleEdit }: ListProps) => (
  <div>

    {isEmpty &&
      list.map(({ isDone, id, item }) => (
        <SingleList handleEdit={handleEdit} key={id} handleIsDone={handleisDone} id={id} isDone={isDone} item={item} />
      ))}
  </div>
);
