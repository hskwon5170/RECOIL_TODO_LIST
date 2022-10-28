<h1>Recoil TodoList 🏁</h1>

<h3>전역 상태관리 라이브러리인 Recoil 연습 및 복습을 위해 간단하게 만들어본 웹앱</h3>
<h4>제작 : 2022.10.27</h4>

## 프로젝트 실행 방법

1. git clone

```bash
git@github.com:hskwon5170/recoil_todo.git
```

2. install

```bash
yarn install
```

3. 실행

```bash
yarn dev
```

## 기술스택 및 라이브러리

- React.js
- Next.js
- TypeScript
- Recoil
- Emotion/Styled-components
- Ant Design
- Chakra UI
- Material-UI

---

## 폴더 구조

```bash
. 
├── 📂pages
│
├── 📂src
│   ├── 📂commons
│   │   ├── 📂hooks         // 커스텀 훅
│   │   └── 📂store         // recoil state 함수
│   └── 📂components
│       ├── 📂TodoInput     // Input 컴포넌트
│       ├── 📂TodoList      // List, TodoItem 컴포넌트       
│       ├── 📂TodoModal     // Modal 컴포넌트        
│       └── 📂TodoTitle     // Title 컴포넌트                                                      
│                      
└── 📂styles
        └── 📜globalStyles.ts  // 전역 스타일
        
```

### 이미지
<img width="1440" alt="스크린샷 2022-10-28 오후 10 44 10" src="https://user-images.githubusercontent.com/104052466/198620408-42deda83-4746-4b8f-aab5-d5633659fc74.png">

### GIF
![28투두-min](https://user-images.githubusercontent.com/104052466/198624601-41d80daf-52f2-436f-939d-e4de71bcd83e.gif)


