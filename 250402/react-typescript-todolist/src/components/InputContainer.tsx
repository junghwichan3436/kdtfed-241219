import { useState } from "react";
import ToDoInput from "./ToDoInput";
import ShowInputButton from "./ShowInputButton";

interface Props {
  readonly onAdd: (toDo: string) => void;
}

function InputContainer({ onAdd }: Props) {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
}

export default InputContainer;
