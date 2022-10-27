import styled from "@emotion/styled";
import { FaPen } from "react-icons/fa";

export const SearchWrap = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  padding: 0px 0px 0px 100px;
  display: flex;
  align-items: center;
  background-image: url("/search/search.svg");
  background-repeat: no-repeat;
  background-position: 30px 10px;
  margin-top: 20px;
  background-color: transparent;
  border: 2px solid black;
  /* box-shadow: 5px 5px 5px gray; */
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
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

export const Icon = styled(FaPen)`
  width: 10%;
  /* background-color: blue; */
  position: relative;
  right: 7rem;
  color: black;
  cursor: pointer;
`;
