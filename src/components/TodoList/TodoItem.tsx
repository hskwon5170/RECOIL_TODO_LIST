import styled from "@emotion/styled";
import { useState, useCallback } from "react";
import TodoModals from "../TodoModal";
import * as S from "./TodoList.styles";
import { message } from "antd";

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

  // FaPen버튼
  const onModify = useCallback(() => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyTodo = useCallback(() => {
    if (!modifyContents.trim()) {
      message.error("값이 입력되지 않았어요 😰", 1);
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
        <S.TodoContents
          title={contents}
          isCompleted={isCompleted}
          onClick={() => onComplete(id)}
        >
          {contents}
        </S.TodoContents>
        <div>
          <S.FaPenIcon onClick={onModify} />
          <S.MdCloseIcon onClick={onDelete(id)}>삭제하기</S.MdCloseIcon>
          {/* <MdClose onClick={() => onDelete(id)} /> */}
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
