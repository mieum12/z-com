"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') { // 브라우저에서만 돌아간다는 것을 확실하게 해줌
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") { // = 개발 환경일때
        require("@/mocks/browser"); // 클라이언트 환경에서 이 파일이 요청을 가로채서 -> http.ts로 보낸다 -> http.ts 실행
      }
    }
  }, []);

  return null;
};