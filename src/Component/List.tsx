import { TodoListProperty } from "../App";
import SingleList from "./SingleList";
export type ListProps = {
  isEmpty: boolean;
  list: TodoListProperty[];
  handleisDone: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleEdit: (e: string, id: number) => void;
  handleDelete: (id: number) => void
};

export const List = ({ isEmpty, list, handleisDone, handleEdit, handleDelete }: ListProps) => (
  <div>

    {isEmpty &&
      list.map(({ isDone, id, item }) => (
        <SingleList handleDelete={handleDelete} handleEdit={handleEdit} key={id} handleisDone={handleisDone} id={id} isDone={isDone} item={item} isEmpty={false} list={[]} />
      ))}
  </div>
);
