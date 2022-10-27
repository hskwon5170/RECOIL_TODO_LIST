import styled from "@emotion/styled";
import { useState, useCallback } from "react";
import { FaPen } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import TodoModals from "../TodoModal";
import * as S from "./TodoList.styles";

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
    <div>
      <S.TodoItems>
        <div title={contents} onClick={() => onComplete(id)}>
          {contents}
        </div>
        <div>
          <FaPen onClick={onModify} />
          <MdClose onClick={() => onDelete(id)} />
        </div>
        {isModal && (
          <TodoModals
            setIsModal={setIsModal}
            modifyContents={modifyContents}
            setModifyContents={setModifyContents}
            onModifyTodo={onModifyTodo}
          />
        )}
      </S.TodoItems>
    </div>
  );
}
