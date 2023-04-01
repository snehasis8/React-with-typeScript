import { todoListProperty } from "../App";
import SingleList from "./SingleList";
type ListProps = {
  isEmpty: boolean;
  list: todoListProperty[];
};

export const List = ({ isEmpty, list }: ListProps) => (
  <div>

    {isEmpty &&
      list.map(({ isDone, id, item }) => (
        <SingleList id={id} isDone={isDone} key={id} item={item} />
      ))}
  </div>
);
