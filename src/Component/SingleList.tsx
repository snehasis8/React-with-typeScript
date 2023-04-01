import { todoListProperty } from "../App";

type SingleListProps = todoListProperty & {
  isMust?: boolean;
}

//steps to integrate ant design in this project
const SingleList = (props: SingleListProps) => {
  return (
    <div style={{ padding: '1rem', margin: "0.2rem", borderBottom: '1px solid black', backgroundColor: 'rgb(255,255,112)' }}> {props.item}</div>
  )
}

export default SingleList