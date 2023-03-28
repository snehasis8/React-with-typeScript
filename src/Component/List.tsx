import { todoListProperty } from "../App";
type ListProps = {
  isEmpty: boolean;
  list: todoListProperty[];
};

export const List = ( {isEmpty , list } : ListProps) => {
  return <div> {isEmpty && list.map((el)=> {
       return <div> {el.item}</div>
  }) } </div>;
};


// {todoList.length > 0 &&
//   todoList.map((el) => {
//     return <div> {el.item} </div>;
//   })}