import { atom } from "recoil";
import useLocalStorage from "../hook/useLocalStorage";

export interface ITodoTypes {}

// 인풋컴포넌트 인풋값
export const InputState = atom<string>({
  key: "InputState",
  default: "",
});

export const todoState = atom({
  key: "todoState",
  // default: [
  //   {
  //     id: 1,
  //     contents: "add TodoList",
  //     isCompleted: false,
  //   },
  // ],
  default: "",
});
