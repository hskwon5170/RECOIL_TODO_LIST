import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { todoState } from "../../commons/store";
import TodoItem from "./TodoItem";
import { useCallback } from "react";

export const Wrapper = styled.div`
  width: 500px;
  /* height: 500px; */
  max-height: 500px;
  position: relative;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const TodoItemsWrapper = styled.div`
  width: 100%;
`;

export const List = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
    <Wrapper>
      <TodoItemsWrapper>
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
          <List>Todo가 없습니다.</List>
        )}
      </TodoItemsWrapper>
    </Wrapper>
  );
}
