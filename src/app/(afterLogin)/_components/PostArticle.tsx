'use client'

import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import style from "./post.module.css"

type Props = {
  children: ReactNode,
  post: {
    postId: number,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    content: string,
    createdAt: Date,
    Images: any[], // 임시 타입
  }
}

export default function PostArticle({children, post}: Props) {
  const router = useRouter()

  const onclick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`)
  }

  return(
    <article className={style.post} onClickCapture={onclick}>
      {children}
    </article>
  )
}