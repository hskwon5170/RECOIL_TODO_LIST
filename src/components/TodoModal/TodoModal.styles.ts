import styled from "@emotion/styled";
import { MdClose } from "react-icons/md";

export const Overlay = styled.div`
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
  padding: 3.6rem;
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

export const InputButtonWrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  background: white;
  color: black;
  margin: 0px 20px;

  ::placeholder {
    font-size: 1.5rem;
    font-weight: 400;
    position: relative;
    /* left: 3%; */
    top: 10%;
    color: black;
    width: 66%;
    /* background-color: blue; */
  }
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  border-radius: 10px;
  font-size: 1.6rem;
  color: #0d008e;
  cursor: pointer;
  background-color: #50ffb0;
  border: none;
  transition: background 0.2s ease-in-out;
  :hover {
    background-color: #0d008e;
    border: none;
    color: white;
  }
`;

export const MdCloseIcon = styled(MdClose)`
  margin-left: 15px;
  cursor: pointer;
  background-color: blue;
  position: absolute;
  top: 17px;
  left: 29rem;
  :hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;
