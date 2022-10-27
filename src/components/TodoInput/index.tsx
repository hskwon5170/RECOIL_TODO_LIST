import styled from "@emotion/styled";
import { FaPen } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { InputState, ITodoTypes, todoState } from "../../commons/store";
import { useCallback } from "react";

const SearchWrap = styled.div`
  width: 100%;
  height: 52px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 10px;
  /* box-shadow: rgb(192 228 212) 4px 4px 4px; */
  padding: 0px 0px 0px 100px;
  display: flex;
  align-items: center;
  background-image: url("/search/search.svg");
  background-repeat: no-repeat;
  background-position: 30px 10px;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;

  ::placeholder {
    font-size: 1.6rem;
    font-weight: 400;
    position: relative;
    /* left: 3%; */
    top: 10%;
    color: white;
    width: 70%;
    /* background-color: blue; */
  }
`;

const Icon = styled(FaPen)`
  width: 10%;
  /* background-color: blue; */
  position: relative;
  right: 7rem;
  color: yellow;
`;

export default function TodoInput() {
  const [contents, setContents] = useRecoilState(InputState);
  const todos = useRecoilValue(todoState);
  const setTodos = useSetRecoilState(todoState);

  const addTodo = useCallback(() => {
    if (!contents.trim()) {
      // 빈칸 입력 방지
      return;
    }
    const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    // 배열에 값이 존재할시, 고유값은 마지막 인덱스에 위치한 id값에서 1을 늘려줘서 고유값 생성.
    // 만약 값이 존재하지 않을시 초기값은 0

    const todo: ITodoTypes = {
      id: nextId,
      contents,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
    setContents("");
  }, [contents, setContents, setTodos, todos]);

  const onChange = useCallback(
    e => {
      const { value } = e.target;
      setContents(value);
    },
    [setContents]
  );

  const onKeyDown = useCallback(
    e => {
      if (e.key === "Enter") {
        addTodo();
      }
    },
    [addTodo]
  );

  return (
    <SearchWrap>
      <SearchInput
        placeholder="Todo를 입력해주세요"
        type="text"
        value={contents}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Icon onClick={addTodo} />
    </SearchWrap>
  );
}
