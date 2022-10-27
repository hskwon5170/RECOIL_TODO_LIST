import styled from "@emotion/styled";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import { FaPen } from "react-icons/fa";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const TodoModalss = styled.div`
  width: 40%;
  height: 40%;
  background-color: white;
  padding: 1.6rem;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -ms-flex-direction: column;
  align-items: center;
`;

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
    <Overlay onClick={onCloseModal}>
      <TodoModalss>
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
      </TodoModalss>
    </Overlay>
  );
}
