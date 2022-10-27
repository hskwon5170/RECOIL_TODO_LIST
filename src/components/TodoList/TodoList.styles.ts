import styled from "@emotion/styled";
import { FaPen } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Switch } from "antd";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
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

export const TodoItems = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;
  /* background-color: blue; */
  width: 100%;
`;

export const TodoContents = styled.div`
  text-decoration: ${({ isCompleted }) => isCompleted && "line-through"};
  cursor: pointer;
`;

export const MdCloseIcon = styled(MdClose)`
  margin-left: 15px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;

export const FaPenIcon = styled(FaPen)`
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;

export const SwitchIcon = styled(Switch)`
  margin-right: 20px;
`;
