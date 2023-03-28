type inpputProps = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  addTodo: (e: React.FormEvent) => void;
};

export const Input = ({ inputValue, handleInput, addTodo }: inpputProps) => {
  return (
    <form onSubmit={(e) => addTodo(e)}>
      <input type="text" onChange={(e) => handleInput(e)} value={inputValue} />
      <button type="submit"> Add Item </button>
    </form>
  );
};
