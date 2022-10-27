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
- TypeScript
- Recoil
- Emotion
- Antd

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

<img width="1440" alt="스크린샷 2022-10-27 오후 11 10 02" src="https://user-images.githubusercontent.com/104052466/198308576-e1b64f1d-408c-4daf-9f9a-36569682bb91.png">


![Oct-27-2022 23-06-58](https://user-images.githubusercontent.com/104052466/198308162-0c8065c8-d57e-4af6-a081-3ff2329cc287.gif)
