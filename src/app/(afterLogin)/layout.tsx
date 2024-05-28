import { ReactNode } from "react";

export default async function AfterLoginLayout({children} : {children: ReactNode}) {
    return (
        <div>after login 레이아웃{children}</div>
    )
}

// RootLayout -> HomeLayout -> Home