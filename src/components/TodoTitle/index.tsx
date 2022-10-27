import styled from "@emotion/styled";
import { GiWireCoil } from "react-icons/gi";

const Wrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--white);
  margin-bottom: 10px;
`;

const Icon = styled(GiWireCoil)`
  margin-right: 10px;
`;

export default function TodoTitle() {
  return (
    <Wrapper>
      <div>Todolist with recoil</div>
    </Wrapper>
  );
}
