# Next + React Query로 SNS 서비스 만들기

리액트18 & 넥스트14 & 리액트쿼리5 & Next Auth5 & MSW2 & socket.io4 & zustand 스택

- Next.js App Router를 기본으로 사용
- Server Action과 같은 Next 14 기능
- React Query로 인피니트 스크롤링, 데이터 캐싱, 옵티미스틱 업데이트, 롤백 등을 구현
- 웹소켓 + react-query로 실시간 채팅을 구현
- Zustand로 Context API를 대체
- MSW로 가짜 API 서버 만들기

https://github.com/ZeroCho/next-app-router-z

# app router 도입 이유

- pages router의 구조상 기존 문제를 개선할 수 없었기에 새로 도입
- 디렉토리 기능
- 공통 레이아웃 기능 사용 가능
- 페이지별 권한 체크 (어드민/로그인 유저 등) → app router 미들 웨어로 가능
- react 18 버전 사용 → 서버 컴포넌트 적극 활용

💡 **`서버 컴포넌트`**

next 서버에서 리액트를 미리 렌더링해서 프론트 혹은 브라우저, 클라언트로 데이터를 보내줄 때 완성된 HTML을 미리 보내주는 것

**`장점`** HTML 로딩 시간, JS 용량 감소

**`단점`** Next 서버 자체의 부담 증가 → 이에 따라 ‘캐시’ 적극 활용


### 기타 메모

디렉토리 이름 중 소괄호로 된 부분은 주소 이름에 관여하지 않음

폴더 주소는 app/(afterLogin)/home 이어도 브라우저에서는 /home이다


### 스타일 선택

tailwind - 호불호가 심하고 가독성이 떨어짐

styled component - Server Component SSR

emotion - next.js와는 잘 안맞음

sass

css module - sass 할 바에 간단하게 가자

vanila extract - 요즘 뜨는 것, windows와 문제

### 단위

dvw, dvh - 전체화면을 채울 수 있는 ex. 100dvw

100%로 하면 되지 않나?

요즘 모바일에서 주소창이 생겼다 없어졌다하며 레이아웃이 틀어지는 경우가 많은데

dvw, dvh는 그것과 무관하게 전체 화면을 채울 수 있다

### Parallel Routes & Intercepting Routes

- Parallel Routes

2개의 화면을 힌 페이지에 같이 띄울 수 있음

페이지 하나가 바탕이 되고 클릭 시 모달이 뜨는 것 처럼 되지만 주소는 바뀐 상태

@로 시작하는 디렉토리를 만들어 사용

@안에 있는 page.tsx와 홈 page.tsx가 패러렐하게 떠야한다면 같은 `(beforeLogin)`이라는 폴더 안에 존재해야한다