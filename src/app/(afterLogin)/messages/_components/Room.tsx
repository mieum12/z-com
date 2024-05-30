'use client'

import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {useRouter} from "next/navigation";
import style from "../message.module.css"

dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function Room() {
  const router = useRouter();

  const user = {
    id: 'bboyami',
    nickname: '뽀얌이',
    Messages: [
      {
        roomId: 123,
        content: '안녕',
        createdAt: new Date()
      },
      {
        roomId: 123,
        content: '오잉또잉',
        createdAt: new Date()
      }
    ]
  }

  const onClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`)
  }

  return (
    <div className={style.room} onClickCapture={onClick}>
      <div className={style.roomUserImage}>
        <img src={faker.image.avatar()} alt=""/>
      </div>
      <div className={style.roomChatInfo}>
        <div className={style.roomUserInfo}>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp;
          ·
          &nbsp;
          <span className={style.postDate}>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={style.roomLastInfo}>
          {user.Messages?.at(-1)?.content}
          {/* 마지막 메세지는 -1 */}
        </div>
      </div>
    </div>
  )
}