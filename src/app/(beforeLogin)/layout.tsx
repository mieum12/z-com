import { ReactNode } from "react";
import styles from "@/app/page.module.css"

// 타입을 밖으로 뽑아서 가독성 높임
type Props = { children: React.ReactNode, modal: React.ReactNode }

export default async function BeforeLoginLayout({ children, modal }: Props) {
    return (
        <div className={styles.container}>
            before login 레이아웃
            {children}
            {modal}
        </div>
    )
}

// 주소가 localhost:3000 일때는 children -> page.tsx이고 modal -> @modal/default.tsx
// 주소가 localhost:3000/i/flow/login 일때는 children -> i/flow/login/page.tsx이고 modal -> @modal/i/flow/login/page.tsx