import * as S from "./TodoModal.styles";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { FaPen } from "react-icons/fa";

export default function TodoModals({
  setIsModal,
  modifyContents,
  setModifyContents,
  onModifyTodo,
}) {
  const onCloseModal = useCallback(() => {
    setIsModal(false);
  }, [setIsModal]);

  const onChange = useCallback(
    e => {
      const { value } = e.target;
      setModifyContents(value);
    },
    [setModifyContents]
  );
  return (
    <S.Overlay onClick={onCloseModal}>
      <S.TodoModalss>
        <div>
          <div>Todo 수정하기</div>
          <FaPen />
        </div>
        <div>
          <input
            type="text"
            value={modifyContents}
            onChange={onChange}
            placeholder="todo 입력"
          />
          <button onClick={onModifyTodo}>수정하기</button>
        </div>
      </S.TodoModalss>
    </S.Overlay>
  );
}
