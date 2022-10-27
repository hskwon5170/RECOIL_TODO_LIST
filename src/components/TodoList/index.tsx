import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
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

export const List = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function TodoList() {
  return (
    <Wrapper>
      <List>Todo가 없습니다. 자유롭게 추가해보세요</List>
    </Wrapper>
  );
}
