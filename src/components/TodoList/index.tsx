import { useRecoilState } from "recoil";
import { todoState } from "../../commons/store";
import TodoItem from "./TodoItem";
import { useCallback } from "react";
import { message } from "antd";
import * as S from "./TodoList.styles";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  console.log("todos", todos);

  // 완료 표시 (가운데 밑줄)
  const onComplete = useCallback(
    // 이곳 onComplete의 매개변수 id는 TodoItem.tsx의 contents conClick에서 제공받음
    id => {
      // 매개 변수 id와 el.id가 같은 객체만 setTodos 해서 todos 값 변경시키기
      setTodos(
        todos.map(el => {
          return el.id === id ? { ...el, isCompleted: !el.isCompleted } : el;
        })
      );
    },

    [setTodos, todos]
  );

  // useCallback을 HOF 방식으로 표현
  // const onComplete = id => () => {
  //   setTodos(
  //     todos.map(el => {
  //       return el.id === id ? { ...el, isCompleted: !el.isCompleted } : el;
  //     })
  //   );
  // };

  // const onDelete = useCallback(
  //   id => {
  //     setTodos(todos.filter(el => el.id !== id));
  //   },
  //   [setTodos]
  // );

  // useCallback을 HOF 방식으로 표현
  const onDelete = id => () => {
    setTodos(todos.filter(el => el.id !== id));
    message.success("투두가 삭제되었어요 😌", 1);
  };

  return (
    <S.Wrapper>
      <div>
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
          <>
            <S.List>등록된 Todo가 없어요.</S.List>
          </>
        )}
      </div>
    </S.Wrapper>
  );
}
