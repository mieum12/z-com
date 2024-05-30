import Home from "@/app/(afterLogin)/home/page";

type Props = {
  params: { username: string, id: string, photoId: string }
}
export default function Page({ params }: Props) {
  // 
  // params는 slug들의 정보를 가져올 수 있다
  params.username // elonmusk
  params.id // 1
  params.photoId // 1

  return (
    <Home />
  )
}