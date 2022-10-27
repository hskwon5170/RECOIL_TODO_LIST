import styled from "@emotion/styled";
import { useState, useCallback } from "react";
import { FaPen } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const TodoItems = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;
`;

export default function TodoItem({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todos,
  setTodos,
}) {
  const [isModal, setIsModal] = useState(false);
  const [modifyContents, setModifyContents] = useState("");

  const onModify = useCallback(() => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyTodo = useCallback(() => {
    if (!modifyContents.trim()) {
      return;
    }
    setTodos(
      todos.map(el => {
        return el.id === id ? { ...el, contents: modifyContents } : el;
      })
    );

    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <TodoItems>
      <div>
        <div title={contents} onClick={() => onComplete(id)}>
          {contents}
        </div>
        <div>
          <FaPen onClick={onModify} />
          <MdClose onClick={() => onDelete(id)} />
        </div>
      </div>
    </TodoItems>
  );
}
