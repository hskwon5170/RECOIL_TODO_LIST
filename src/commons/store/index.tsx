import { atom } from "recoil";

export interface ITodoTypes {}

// 인풋컴포넌트 인풋값
export const InputState = atom<string>({
  key: "InputState",
  default: "",
});

export const todoState = atom({
  key: "todoState",
  default: [
    {
      id: 1,
      contents: "Todo List",
      isCompleted: false,
    },
    {
      id: 2,
      contents: "자유롭게",
      isCompleted: false,
    },
    {
      id: 3,
      contents: "추가하기",
      isCompleted: false,
    },
  ],
});
