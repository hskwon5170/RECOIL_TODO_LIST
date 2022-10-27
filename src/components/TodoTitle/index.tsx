import styled from "@emotion/styled";
import { GiWireCoil } from "react-icons/gi";
import { FcOk } from "react-icons/fc";

const Wrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Icon = styled(FcOk)`
  margin-left: 10px;
`;

const Title = styled.div`
  color: black;
  cursor: pointer;
`;

export default function TodoTitle() {
  return (
    <Wrapper>
      <Title>Todos with RECOIL</Title>
      <Icon />
    </Wrapper>
  );
}
