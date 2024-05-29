// import { redirect } from "next/navigation";

// export default function Signup() {
//     redirect('/i/flow/signup')
// }

"use client";

import {useRouter} from "next/navigation";
import Main from "../_components/Main";

export default function Signup() {
  const router = useRouter();
  router.replace('/i/flow/signup');
  return (
    <Main/>
  );
}