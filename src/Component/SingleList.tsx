import { useState, useRef } from "react";
import { TodoListProperty } from "../App";

import { ListProps } from "./List";

type SingleListProps = TodoListProperty & {
  isMust?: boolean;
  handleIsDone: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleEdit: (e: string, id: number) => void;
};

//steps to integrate ant design in this project
const SingleList = (props: SingleListProps) => {
  const [editItem, setEditItem] = useState<string>(props.item);
  const [editeMode, setEditmode] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ backgroundColor: "rgb(255,255,112)", display: 'flex', alignItems: 'center', width: '100%' }}>
      <label>
        <input

          type="checkbox"
          checked={props.isDone}
          onChange={(e) => props.handleIsDone(e, props.id)}
        />

      </label>
      <div
        ref={divRef}
        contentEditable={true}
        onBlur={
          () => {
            props.handleEdit(divRef.current?.textContent || '', props.id)
            setEditmode(!editeMode)
          }
        }

        onClick={() => {
          setEditmode(!editeMode)
        }


        }
        // onInput={(e) => {

        //   !editeMode && props.handleEdit(divRef.current?.textContent || '', props.id)
        // }} // here I houls have recievd a function which I am going to place here 

        style={{
          justifyContent: "start",
          width: "100%",
          padding: "1rem",
          margin: "0.2rem",
          borderBottom: "1px solid black",
          backgroundColor: "rgb(255,255,112)",
          textAlign: "start",

        }}
      >
        {props.isDone ? <s> {props.item} </s> : <span> {props.item} </span>}
      </div>


    </div >
  );
};

export default SingleList;
