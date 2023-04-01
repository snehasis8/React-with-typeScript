import { TodoListProperty } from "../App";


type SingleListProps = TodoListProperty & {
  isMust?: boolean;
  handleIsDone: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
};

//steps to integrate ant design in this project
const SingleList = (props: SingleListProps) => {
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

        style={{
          justifyContent: "start",
          width: "100%",
          padding: "1rem",
          margin: "0.2rem",
          borderBottom: "1px solid black",
          backgroundColor: "rgb(255,255,112)",
          textAlign: "start"
        }}
      >
        {props.item}
      </div>


    </div>
  );
};

export default SingleList;
