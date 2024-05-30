import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButton";
import Post from "@/app/(afterLogin)/_components/Post";
import { faker } from "@faker-js/faker";
import style from './photoModal.module.css';
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";


export default function PageModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text()
    }
  }
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div className={style.image} style={{backgroundImage: `url(${photo.link})`}} />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        
        {/* 이미지가 왼쪽에 크게 보일테니까 게시글 부분에서는 이미지가 뜨지 않게 처리해줌 */}
        <Post noImage />

        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}