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