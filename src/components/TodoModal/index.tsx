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
    <S.Overlay>
      <S.TodoModalss>
        <S.InputButtonWrapper>
          <S.MdCloseIcon onClick={onCloseModal} />
          <S.SearchInput
            type="text"
            value={modifyContents}
            onChange={onChange}
            placeholder="todo 입력"
          />
          <S.Button onClick={onModifyTodo}>수정하기</S.Button>
        </S.InputButtonWrapper>
      </S.TodoModalss>
    </S.Overlay>
  );
}
