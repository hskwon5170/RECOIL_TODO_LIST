import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { todoState } from "../../commons/store";
import TodoItem from "./TodoItem";
import { useCallback } from "react";
import * as S from "./TodoList.styles";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);

  const onComplete = useCallback(
    id => {
      setTodos(
        todos.map(el => {
          return el.id === id ? { ...el, isCompleted: !el.isCompleted } : el;
        })
      );
    },
    [setTodos, todos]
  );

  const onDelete = useCallback(
    id => {
      setTodos(todos.filter(el => el.id !== id));
    },
    [setTodos]
  );

  return (
    <S.Wrapper>
      <S.TodoItemsWrapper>
        {/* <TodoItem /> */}
        {/* <List>Todo가 없습니다. 자유롭게 추가해보세요</List> */}
        {todos.length > 0 ? (
          todos.map(el => {
            const { id, contents, isCompleted } = el;

            return (
              <TodoItem
                key={id}
                id={id}
                contents={contents}
                isCompleted={isCompleted}
                onComplete={onComplete}
                onDelete={onDelete}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })
        ) : (
          <S.List>Todo가 없습니다.</S.List>
        )}
      </S.TodoItemsWrapper>
    </S.Wrapper>
  );
}
