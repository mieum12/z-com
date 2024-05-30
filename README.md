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

# 기타 메모

### 📍 그룹 폴더

그룹폴더의 주요 역할은 레이어웃을 두는 것이다

디렉토리 이름 중 소괄호로 된 부분은 주소 이름에 관여하지 않음

폴더 주소는 app/(afterLogin)/home 이어도 브라우저에서는 /home이다

### 📍 스타일 선택

tailwind - 호불호가 심하고 가독성이 떨어짐

styled component - Server Component SSR

emotion - next.js와는 잘 안맞음

sass

css module - sass 할 바에 간단하게 가자

vanila extract - 요즘 뜨는 것, windows와 문제

### 📍 단위

dvw, dvh - 전체화면을 채울 수 있는 ex. 100dvw

100%로 하면 되지 않나?

요즘 모바일에서 주소창이 생겼다 없어졌다하며 레이아웃이 틀어지는 경우가 많은데

dvw, dvh는 그것과 무관하게 전체 화면을 채울 수 있다

### 📍 Parallel Routes & Intercepting Routes

- Parallel Routes

2개의 화면을 한 페이지에 같이 띄울 수 있음

페이지 하나가 바탕이 되고 클릭 시 모달이 뜨는 것 처럼 되지만 주소는 바뀐 상태

@로 시작하는 디렉토리를 만들어 사용

@안에 있는 page.tsx와 홈 page.tsx가 패러렐하게 떠야한다면 같은 `(beforeLogin)`이라는 폴더 안에 존재해야한다

레이아웃에 모달 자리 잊지 말기!

- Intercepting Routes

서로 주소가 다른데 같은 페이지에서 뜰 수 있게 함

패러렐 라우트가 인터셉팅해서 페이지 위에 모달로 띄우는 것

클라이언트에서 라우팅 할 때만 인터셉트 라우팅 적용

원래 로그인 눌렀을때 i/flow/login 이 페이지가 나와야하는데

(.)i 라는 인터셉팅 라우트가 적용되어 화면에 나타난다

근데 (.)i는 modal이기 때문에 children에 그려지는게 아닌 상황

패러렐+인터셉팅 라우트를 하면 기존 화면 위에 모달을 띄울 수 있다!!

그럼 가로채기 당한 i/flow/login 페이지는 영원히 안뜨나? 아님 새로고침했을떄 들어간다

즉, 링크를 통해 들어갈 때는 인터셉트 라우터로 들어가고, 새로고침이나 브라우저에서 직접 접근할 때는 원래 페이지로 들어간다

### 📍 private folder

앞에 \_ 를 붙이면 프라이빗 폴더가 되고 공통된 것들을 넣어준다

폴더 정리용이다

예를 들면 인터셉팅 라우트의 내용과 원래 페이지의 내용(즉 뒷페이지만 제외한 모달의 형태)은 같아야하니까 파일이 중복된다

### 📍 useSelectedLayoutSegment를 사용해 엑티브 링크 생성

useSelectedLayoutSegment()는 클라이언트 컴포넌트에서 사용되는 훅

호출된 레이아웃보다 한 수준 아래에 있는 segment를 반환

(home 페이지는 호출된 레이아웃과 같은 수준에 있으므로 segment는 null)

Active Link란 - 현재 표시 중인 링크의 아이콘이 강조 표시하는 기능

useSelectedLayoutSegment()를 이용해 segment를 가져와 segment와 일치하는 Active Link를 강조해서 보여줌

### 📍 사용 라이브러리

- dayjs

- classnames : 조건마다 클래스를 합성할 때 사용

- faker : 랜덤 이미지 생성 (더미데이터)

### 📍 onClickCapture

클릭 이벤트랑 a 태그랑 겹치는 경우에 사용

id 눌렀을때는 id 프로필로, 게시글 내용을 눌렀을때는 게시글 상세 페이지로 이동

(원래는 id 눌러도 게시글 상세로 이동했다)
