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

// RootLayout -> HomeLayout -> Home