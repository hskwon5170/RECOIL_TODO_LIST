import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { InputState, ITodoTypes, todoState } from "../../commons/store";
import { useCallback } from "react";
import * as S from "./TodoInput.styles";
import { message } from "antd";
import React from "react";

export default function TodoInput() {
  // input값을 recoil inputstate에 저장
  const [contents, setContents] = useRecoilState(InputState);
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);

  const onChange = useCallback(
    e => {
      const { value } = e.target;
      setContents(value);
    },
    [setContents]
  );

  const addTodo = useCallback(() => {
    if (!contents.trim()) {
      // 빈칸 입력 방지
      message.error("값이 입력되지 않았어요 😰", 1);
      return;
    }
    const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    // 배열에 값이 존재할시, 고유값은 마지막 인덱스에 위치한 id값에서 1을 늘려줘서 고유값 생성.
    // 만약 값이 존재하지 않을시 초기값은 0

    const todo = {
      id: nextId, // 투두가 존재할경우 존재하는 배열
      contents: contents,
      isCompleted: false,
    };

    setTodos([...todos, todo]); // 기존 todos를 복사해오고 todo를 붙임
    setContents(""); // input 입력 후 빈값처리
    message.success("투두가 등록되었어요 😌", 1);
  }, [contents, setContents, setTodos, todos]);

  const onKeyDown = useCallback(
    e => {
      if (e.key === "Enter") {
        addTodo();
      }
    },
    [addTodo]
  );

  return (
    <S.SearchWrap>
      <S.SearchInput
        placeholder="Todo를 입력해주세요"
        type="text"
        value={contents}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <S.Icon onClick={addTodo} />
    </S.SearchWrap>
  );
}
